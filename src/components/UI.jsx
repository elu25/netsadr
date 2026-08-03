import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useLocation } from 'react-router-dom';
import { C, SOCIALS } from '../data/constants';
import logoIcon from '../assets/logo-icon.png';

// ── Stars ─────────────────────────────────────────────────────
export const Stars = ({ n }) => (
  <span style={{ color: C.amber, fontSize: 12 }}>
    {'★'.repeat(n)}{'☆'.repeat(5 - n)}
  </span>
);

// ── Badge ─────────────────────────────────────────────────────
export const Badge = ({ type }) => {
  const map = {
    verified: { bg: C.greenLight, color: C.greenDark, label: '✓ Verified' },
    premium:  { bg: C.gold,       color: C.black,     label: '★ Premium'  },
    new:      { bg: '#E6F1FB',    color: '#0C447C',   label: 'New'        },
  };
  const s = map[type] || map.new;
  return (
    <span style={{
      background: s.bg, color: s.color,
      borderRadius: 20, padding: '2px 9px',
      fontSize: 10, fontWeight: 700,
    }}>{s.label}</span>
  );
};

// ── Logo ──────────────────────────────────────────────────────
export const Logo = ({ size = 'md' }) => {
  const sz = {
    lg: { box: 46, name: 22, sub: 12 },
    md: { box: 36, name: 17, sub: 10 },
    sm: { box: 28, name: 14, sub: 0  },
  }[size];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <img src={logoIcon} alt="Netsadr" style={{ height: sz.box, width: 'auto', flexShrink: 0 }} />
      <div>
        <div style={{ fontSize: sz.name, fontWeight: 700, lineHeight: 1.1, color: '#fff', letterSpacing: -0.4 }}>
          Netsa<span style={{ color: C.green }}>Dr</span>
        </div>
        {sz.sub > 0 && (
          <div style={{ fontSize: sz.sub, color: 'rgba(255,255,255,0.4)', marginTop: 1 }}>
            netsadr.et
          </div>
        )}
      </div>
    </div>
  );
};

// ── Social Icon (SVG) ─────────────────────────────────────────
export const SocialIcon = ({ type, size = 15 }) => {
  const paths = {
    fb: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
    ig: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5a1 1 0 1 1-1-1 1 1 0 0 1 1 1zM21 16V8a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5z',
    tt: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.95a8.28 8.28 0 0 0 4.84 1.55V7.04a4.85 4.85 0 0 1-1.07-.35z',
    tg: 'M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17.5 7.498c-1.33.571-.915 2.27.544 2.5l4.412.703 1.727 5.18a1.02 1.02 0 0 0 1.595.433l2.476-2.024 4.822 3.543c.89.653 2.162.216 2.432-.847l3.5-15.498a1.64 1.64 0 0 0-2.986-1.703z',
  };
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none'
      stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
      <path d={paths[type]} />
    </svg>
  );
};

// ── Navbar ────────────────────────────────────────────────────
export const Navbar = ({ onNav }) => {
  const { pathname } = useLocation();
  const { lang, toggleLang, t } = useLanguage();
  const activePage = pathname === '/' ? 'home' : pathname.slice(1).split('/')[0];
  const navLabels = { home: t('navHome'), jobs: t('navJobs'), institutions: t('navInstitutions') };
  return (
  <nav style={{ background: C.black, borderBottom: `3px solid ${C.gold}`, position: 'sticky', top: 0, zIndex: 100 }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', height: 56, gap: 14 }}>
      <Logo />
      <div style={{ display: 'flex', gap: 2, marginLeft: 10, overflowX: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none' }}>
        {['home','jobs','institutions'].map(p => (
          <button key={p} onClick={() => onNav(p)} style={{
            background: activePage === p ? 'rgba(201,168,76,0.15)' : 'transparent',
            border: 'none', borderRadius: 6,
            color: activePage === p ? C.gold : 'rgba(255,255,255,0.55)',
            padding: '5px 11px', fontSize: 12, cursor: 'pointer',
            fontWeight: activePage === p ? 700 : 400,
            flexShrink: 0,
          }}>{navLabels[p]}</button>
        ))}
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
        <div className="navbar-socials" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {SOCIALS.map(s => (
            <a key={s.label} href={s.url} target='_blank' rel='noreferrer'
              title={`@${s.handle}`}
              style={{ color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center' }}>
              <SocialIcon type={s.icon} size={14} />
            </a>
          ))}
          <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)', margin: '0 4px' }} />
        </div>
        <button onClick={toggleLang} title="Switch language / ቋንቋ ይቀይሩ" style={{
          background: 'transparent', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 6,
          color: 'rgba(255,255,255,0.7)', padding: '5px 10px', fontSize: 12, cursor: 'pointer', fontWeight: 700,
        }}>
          {lang === 'en' ? 'አማ' : 'EN'}
        </button>
        <button className="navbar-login" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 6, color: 'rgba(255,255,255,0.7)', padding: '5px 12px', fontSize: 12, cursor: 'pointer' }}>
          Login
        </button>
        <button onClick={() => onNav('list')} style={{ background: C.gold, border: 'none', borderRadius: 6, color: C.black, padding: '5px 12px', fontSize: 12, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>
          {t('listFree')}
        </button>
      </div>
    </div>
  </nav>
  );
};

// ── Ticker ────────────────────────────────────────────────────
export const Ticker = ({ text }) => {
  const { t } = useLanguage();
  return (
  <div style={{ background: C.greenDark, padding: '6px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
    <span style={{ color: C.amber, fontSize: 10, fontWeight: 700, letterSpacing: 1, whiteSpace: 'nowrap', borderRight: '1px solid rgba(255,255,255,0.2)', paddingRight: 10 }}>🔴 {t('liveLabel')}</span>
    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, transition: 'opacity 0.3s' }}>{text}</span>
  </div>
  );
};

// ── Footer ────────────────────────────────────────────────────
export const Footer = ({ onNav }) => (
  <footer style={{ background: C.black, padding: '32px 20px 20px', borderTop: `1px solid rgba(201,168,76,0.12)` }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 28, marginBottom: 24 }}>
        <div>
          <Logo />
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, marginTop: 12, lineHeight: 1.8 }}>
            Butajira's free business directory.<br />
            ነፃ ድር — ሁሉንም ኢትዮጵያ
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.url} target='_blank' rel='noreferrer'
                style={{ width: 32, height: 32, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.gold }}>
                <SocialIcon type={s.icon} size={14} />
              </a>
            ))}
          </div>
        </div>
        {[
          ['Platform', [['Directory','home'],['Jobs','jobs'],['Institutions','institutions'],['Marketplace (coming soon)','marketplace'],['Tenders (coming soon)','tenders'],['Privacy Policy','privacy']]],
          ['Contact',  [['+251 931 631 332',null],['elias.netsadr@gmail.com',null],['Butajira, Ethiopia',null],['netsadr.et',null],['netsadr.com',null]]],
        ].map(([title, items]) => (
          <div key={title}>
            <div style={{ color: C.gold, fontSize: 10, fontWeight: 700, letterSpacing: 0.8, marginBottom: 12 }}>{String(title).toUpperCase()}</div>
            {items.map(([label, page]) => (
              <div key={label}
                onClick={() => page && onNav(page)}
                style={{ color: 'rgba(255,255,255,0.38)', fontSize: 12, marginBottom: 8, cursor: page ? 'pointer' : 'default' }}
                onMouseEnter={e => e.currentTarget.style.color = C.gold}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}>
                {label}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: 14, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6 }}>
        <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: 11 }}>© 2026 Netsadr.et — All rights reserved · Elias Sisay</span>
        <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: 11 }}>fb/netsadr · ig/@netsa_dr · tt/@netsa_dr · t.me/netsadr</span>
      </div>
    </div>
  </footer>
);

// ── PhotoLightbox ─────────────────────────────────────────────
// Reusable full-screen photo viewer. Pass any listing's resolved photo
// URLs — works automatically for every current and future listing photo,
// no per-listing wiring needed. Tap image/arrows to navigate, tap
// background or the × to close, swipe left/right on touch, arrow keys
// and Escape on desktop.
export const PhotoLightbox = ({ srcs, startIndex = 0, onClose }) => {
  const [index, setIndex] = useState(startIndex);
  const touchStartX = useRef(null);

  const next = () => setIndex(i => (i + 1) % srcs.length);
  const prev = () => setIndex(i => (i - 1 + srcs.length) % srcs.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [srcs.length]);

  if (!srcs || srcs.length === 0) return null;

  return (
    <div
      onClick={onClose}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchStartX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
        touchStartX.current = null;
      }}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: 'absolute', top: 16, right: 16, width: 40, height: 40, borderRadius: 20,
          background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', fontSize: 20,
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        ✕
      </button>

      {srcs.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Previous photo"
          style={{
            position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
            width: 44, height: 44, borderRadius: 22, background: 'rgba(255,255,255,0.12)',
            border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer',
          }}
        >
          ‹
        </button>
      )}

      <img
        src={srcs[index]}
        alt={`Photo ${index + 1} of ${srcs.length}`}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '92vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: 6 }}
      />

      {srcs.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Next photo"
          style={{
            position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
            width: 44, height: 44, borderRadius: 22, background: 'rgba(255,255,255,0.12)',
            border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer',
          }}
        >
          ›
        </button>
      )}

      {srcs.length > 1 && (
        <div style={{ position: 'absolute', bottom: 20, color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>
          {index + 1} / {srcs.length}
        </div>
      )}
    </div>
  );
};
