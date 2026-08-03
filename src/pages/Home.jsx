import { useState } from 'react';
import { C, CATEGORIES, LISTINGS, TICKERS } from '../data/constants';
import { Stars, Badge, Ticker } from '../components/UI';
import { useLanguage } from '../i18n/LanguageContext';
import { categoryLabel, TICKERS_AM } from '../i18n/translations';

const listingPhotos = require.context('../assets/listings', false, /\.(jpe?g|png)$/);
function resolvePhoto(filename) {
  try { return listingPhotos(`./${filename}`); } catch { return null; }
}

export default function Home({ onNav }) {
  const { t, lang } = useLanguage();
  const [tab,    setTab]    = useState('featured');
  const [city,   setCity]   = useState('All');
  const [search, setSearch] = useState('');
  const [ticker, setTicker] = useState(0);

  // rotate ticker
  useState(() => {
    const t = setInterval(() => setTicker(i => (i + 1) % TICKERS.length), 3500);
    return () => clearInterval(t);
  });

  // Cities computed from real listings only — don't advertise coverage
  // you don't have.
  const cities = ['All', ...new Set(LISTINGS.map(l => l.city))];

  // Used by category tiles and quick tags — sets the filter AND jumps to
  // results immediately, so the person doesn't have to scroll to find what
  // they just clicked. NOT used on the text input itself, since scrolling
  // on every keystroke while someone is mid-typing would be worse than the
  // original problem.
  const filterAndScroll = (term) => {
    setSearch(term);
    requestAnimationFrame(() => {
      document.getElementById('listings-section')?.scrollIntoView({ behavior: 'smooth' });
    });
  };

  const filtered = LISTINGS.filter(l => {
    const matchTab  = search ? true : l.tabs.includes(tab);
    const matchCity = city === 'All' || l.city === city;
    const matchQ    = !search || l.name.toLowerCase().includes(search.toLowerCase()) || l.cat.toLowerCase().includes(search.toLowerCase()) || l.city.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchCity && matchQ;
  });

  return (
    <div>
      <Ticker text={lang === 'am' ? TICKERS_AM[ticker] : TICKERS[ticker]} />

      {/* ── HERO ── */}
      <div style={{ background: `linear-gradient(135deg, ${C.black} 0%, ${C.greenDark} 55%, ${C.green} 100%)`, padding: '48px 20px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -50, right: -50, width: 220, height: 220, borderRadius: '50%', background: C.gold, opacity: 0.06, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -40, width: 240, height: 240, borderRadius: '50%', background: C.green, opacity: 0.1, pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'inline-block', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 20, padding: '4px 16px', marginBottom: 16 }}>
            <span style={{ color: C.gold, fontSize: 13, fontWeight: 600 }}>{t('heroKicker')}</span>
          </div>
          <h1 style={{ color: '#fff', fontSize: 36, fontWeight: 800, margin: '0 0 12px', letterSpacing: -1, lineHeight: 1.15 }}>
            {t('heroTitlePrefix')}<span style={{ color: C.gold }}>{t('heroTitleHighlight')}</span>{t('heroTitleSuffix')}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, marginBottom: 26 }}>
            {t('heroTagline')}
          </p>

          {/* Search */}
          <div style={{ maxWidth: 480, margin: '0 auto 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <select
              value={search}
              onChange={e => setSearch(e.target.value === t('allCategories') ? '' : e.target.value)}
              style={{ width: '100%', maxWidth: 220, background: '#fff', border: 'none', borderRadius: 10, padding: '10px 14px', fontSize: 13, color: '#444', cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,0,0,0.15)' }}>
              <option value="">{t('allCategories')}</option>
              {CATEGORIES.map(c => <option key={c.label} value={c.label}>{categoryLabel(c.label, lang)}</option>)}
            </select>
            <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={t('searchPlaceholder')}
                style={{ flex: '4 1 180px', minWidth: 0, border: 'none', padding: '14px 16px', fontSize: 14, color: '#333', outline: 'none' }}
              />
              <button onClick={() => document.getElementById('listings-section')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ flex: '0 0 auto', background: C.gold, border: 'none', padding: '14px 22px', fontSize: 13, fontWeight: 700, color: C.black, cursor: 'pointer' }}>
                {t('searchButton')}
              </button>
            </div>
          </div>

          {/* Quick tags — derived from categories that actually have listings, not a hardcoded guess */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 30 }}>
            {CATEGORIES
              .map(c => ({ ...c, count: LISTINGS.filter(l => l.cat === c.label).length }))
              .filter(c => c.count > 0)
              .sort((a, b) => b.count - a.count)
              .slice(0, 6)
              .map(c => (
                <span key={c.label} onClick={() => filterAndScroll(c.label)}
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 20, padding: '4px 14px', color: '#fff', fontSize: 12, cursor: 'pointer' }}>
                  {c.icon} {categoryLabel(c.label, lang)}
                </span>
              ))}
          </div>

          {/* Stats — real numbers only. Never hardcode these. */}
          <div style={{ display: 'flex', gap: 36, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[[String(LISTINGS.length), t('statsBusinesses')], [String(cities.length - 1), t('statsCities')], [t('statsFreeLabel'), t('statsFree')]].map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ color: C.gold, fontSize: 26, fontWeight: 800, lineHeight: 1 }}>{n}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CITY STRIP — only shows cities you actually have listings in ── */}
      <div style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '12px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 10, color: '#bbb', marginBottom: 8, fontWeight: 700, letterSpacing: 0.6 }}>{t('browseByCity')}</div>
          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
            {cities.map(c => (
              <span key={c} onClick={() => setCity(c)} style={{
                background: city === c ? C.greenLight : '#f4f4f4',
                color: city === c ? C.greenDark : '#666',
                border: `1px solid ${city === c ? C.green : '#e8e8e8'}`,
                borderRadius: 20, padding: '4px 14px', fontSize: 12, cursor: 'pointer',
                fontWeight: city === c ? 700 : 400,
              }}>{c === 'All' ? t('all') : (lang === 'am' && c === 'Butajira' ? 'ቡታጅራ' : c)}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>

        {/* ── CATEGORIES — hidden once a filter is active so results aren't buried below it ── */}
        {!search && (
          <div style={{ padding: '28px 0 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.black }}>{t('browseByCategory')}</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))', gap: 10 }}>
              {CATEGORIES.map(c => {
                const n = LISTINGS.filter(l => l.cat === c.label).length;
                return (
                  <div key={c.label} onClick={() => filterAndScroll(c.label)}
                    style={{ background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: '14px 8px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = C.green; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#eee'; e.currentTarget.style.transform = 'none'; }}>
                    <div style={{ fontSize: 26, marginBottom: 6 }}>{c.icon}</div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: C.black, lineHeight: 1.3, marginBottom: 2 }}>{categoryLabel(c.label, lang)}</div>
                    <div style={{ fontSize: 10, color: '#aaa' }}>{n}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── LISTINGS ── */}
        <div id="listings-section" style={{ marginTop: 32 }}>
          <div style={{ display: 'flex', gap: 3, borderBottom: `2px solid ${C.greenLight}` }}>
            {[['featured','⭐ Featured'],['toprated','🏆 Top Rated'],['new','🆕 New'],['wholesale','📦 Wholesale']].map(([t, label]) => (
              <button key={t} onClick={() => { setTab(t); setSearch(''); }} style={{
                background: tab === t ? '#fff' : 'transparent',
                border: `1px solid ${tab === t ? C.greenLight : 'transparent'}`,
                borderBottom: tab === t ? `2px solid ${C.green}` : 'none',
                borderRadius: '8px 8px 0 0', padding: '8px 16px',
                fontSize: 13, cursor: 'pointer',
                color: tab === t ? C.green : '#999',
                fontWeight: tab === t ? 700 : 400,
                marginBottom: -2,
              }}>{label}</button>
            ))}
          </div>

          <div style={{ background: '#fff', border: `1px solid ${C.greenLight}`, borderTop: 'none', padding: '10px 14px', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            {search && (
              <span onClick={() => setSearch('')} style={{ fontSize: 12, color: C.green, cursor: 'pointer', fontWeight: 600 }}>
                ✕ Clear "{search}"
              </span>
            )}
            <span style={{ marginLeft: 'auto', fontSize: 12, color: '#aaa' }}>
              {filtered.length} result{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14, padding: '16px 0 30px' }}>
            {filtered.length === 0 && (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: 48, color: '#bbb', fontSize: 14 }}>
                No listings found. Try a different search or city.
              </div>
            )}
            {filtered.map(l => (
              <div key={l.id}
                onClick={() => onNav('listing', l.id)}
                style={{ background: '#fff', border: '1px solid #eee', borderRadius: 14, overflow: 'hidden', cursor: 'pointer', transition: 'all 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.green; e.currentTarget.style.boxShadow = '0 4px 18px rgba(29,158,117,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#eee'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{
                  height: 88, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36,
                  background: l.photos?.[0] && resolvePhoto(l.photos[0])
                    ? `url(${resolvePhoto(l.photos[0])}) center/cover no-repeat`
                    : `linear-gradient(135deg, ${C.greenLight}, #f0faf5)`,
                }}>
                  {!(l.photos?.[0] && resolvePhoto(l.photos[0])) && l.emoji}
                  <span style={{ position: 'absolute', top: 8, right: 8 }}><Badge type={l.badge} /></span>
                </div>
                <div style={{ padding: '12px 14px' }}>
                  <div style={{ fontSize: 10, color: C.green, fontWeight: 700, marginBottom: 3, textTransform: 'uppercase', letterSpacing: 0.3 }}>{l.cat}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 1, lineHeight: 1.3 }}>{l.name}</div>
                  {l.nameAm && <div style={{ fontSize: 12, color: '#888', marginBottom: 4 }}>{l.nameAm}</div>}
                  {l.rating > 0 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#888', marginBottom: 4 }}>
                      <Stars n={l.rating} />
                      <span>{l.rating}.0</span>
                      <span style={{ color: '#ddd' }}>|</span>
                      <span>{l.reviews} reviews</span>
                    </div>
                  )}
                  <div style={{ fontSize: 11, color: '#aaa', marginBottom: 11 }}>📍 {l.city}</div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {l.phone && (
                      <button onClick={e => { e.stopPropagation(); window.open(`tel:${l.phone}`); }}
                        style={{ flex: 1, background: '#f7f7f6', border: '1px solid #eee', borderRadius: 7, padding: '7px 4px', fontSize: 11, cursor: 'pointer', color: '#666' }}>
                        📞 Call
                      </button>
                    )}
                    <button onClick={e => e.stopPropagation()}
                      style={{ flex: 1, background: '#f7f7f6', border: '1px solid #eee', borderRadius: 7, padding: '7px 4px', fontSize: 11, cursor: 'pointer', color: '#666' }}>
                      🤍 Save
                    </button>
                    <button style={{ flex: 2, background: C.green, border: 'none', borderRadius: 7, padding: '7px', fontSize: 11, cursor: 'pointer', color: '#fff', fontWeight: 700 }}>
                      View →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA BANNER ── */}
      <div style={{ background: `linear-gradient(135deg, ${C.black}, ${C.charcoal})`, borderTop: `3px solid ${C.gold}`, borderBottom: `3px solid ${C.gold}`, padding: '34px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ color: C.gold, fontSize: 10, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>FOR BUSINESS OWNERS</div>
            <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 700, margin: '0 0 6px' }}>Grow with Netsadr.et — it's free</h3>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, margin: 0 }}>Get found by customers searching for businesses in Butajira.</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={() => onNav('list')} style={{ background: C.gold, border: 'none', borderRadius: 8, color: C.black, padding: '10px 20px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
              Add free listing ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
