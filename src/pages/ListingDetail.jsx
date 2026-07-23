import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { C, LISTINGS, INSTITUTIONS } from '../data/constants';
import { Stars, Badge, PhotoLightbox } from '../components/UI';

// Menu prices are hidden site-wide for now (per request) — flip this to
// true to show them again everywhere without touching the render code.
const SHOW_MENU_PRICES = false;

// Icons shown next to each menu category header. Falls back to a plain
// plate emoji for any category name not listed here (e.g. future menus
// for other listings with different section names).
const CATEGORY_ICONS = {
  'Lunch / Main Dishes': '🍛',
  'Salads': '🥗',
  'Extras / Add-ons': '➕',
  'Burgers': '🍔',
  'Large Pizza': '🍕',
  'Mini Pizza': '🍕',
  'Soft Drinks & Water': '🥤',
  'Breakfast': '🍳',
  'Sandwiches': '🥪',
  'Fresh Juices & Drinks': '🧃',
  'Hot Drinks': '☕',
};

// Real listing photos live in src/assets/listings/ and are referenced by
// filename in each listing's `photos` array. This map lets us resolve a
// filename string to the actual bundled image at build time.
const listingPhotos = require.context('../assets/listings', false, /\.(jpe?g|png)$/);
function resolvePhoto(filename) {
  try { return listingPhotos(`./${filename}`); } catch { return null; }
}

export default function ListingDetail({ onNav }) {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  // Lets a QR code or shared link jump straight to a specific tab, e.g.
  // /listing/15?tab=menu opens directly on the Menu tab instead of Overview.
  const requestedTab = searchParams.get('tab');
  // Look up by URL param, not passed-in state — this is what makes a
  // shared link actually work when someone opens it fresh (e.g. from
  // Facebook/Telegram) instead of only working via in-app navigation.
  const listing = [...LISTINGS, ...INSTITUTIONS].find(l => String(l.id) === id);
  const [saved, setSaved] = useState(false);
  const [tab,   setTab]   = useState(() => {
    const validTabs = ['overview', 'reviews', 'photos', 'hours'];
    if ((listing?.menu?.length || listing?.menuCategories?.length)) validTabs.push('menu');
    return validTabs.includes(requestedTab) ? requestedTab : 'overview';
  });
  const [lightboxIndex, setLightboxIndex] = useState(null); // null = closed
  const [menuLightboxIndex, setMenuLightboxIndex] = useState(null); // null = closed
  const [openMenuCats, setOpenMenuCats] = useState([0]); // which category accordions are expanded
  const resolvedPhotos = (listing?.photos || []).map(resolvePhoto).filter(Boolean);
  const resolvedMenuPhotos = (listing?.menu || []).map(item => resolvePhoto(item.photo)).filter(Boolean);

  if (!listing) return (
    <div style={{ textAlign: 'center', padding: 60 }}>
      <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
      <div style={{ fontSize: 16, color: C.black, marginBottom: 8 }}>Listing not found</div>
      <button onClick={() => onNav('home')} style={{ background: C.green, border: 'none', borderRadius: 8, color: '#fff', padding: '10px 24px', fontSize: 14, cursor: 'pointer' }}>← Back to Directory</button>
    </div>
  );

  return (
    <div style={{ background: '#F7F7F6', minHeight: '100vh' }}>

      {/* Breadcrumb */}
      <div style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '10px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', fontSize: 12, color: '#aaa', display: 'flex', gap: 6, alignItems: 'center' }}>
          <span onClick={() => onNav('home')} style={{ color: C.green, cursor: 'pointer' }}>Directory</span>
          <span>›</span>
          <span onClick={() => onNav('home')} style={{ color: C.green, cursor: 'pointer' }}>{listing.cat}</span>
          <span>›</span>
          <span style={{ color: '#888' }}>{listing.name}</span>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>

        {/* LEFT COLUMN */}
        <div>

          {/* Hero card */}
          <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid #eee', marginBottom: 16 }}>
            <div
              onClick={() => resolvedPhotos.length > 0 && setLightboxIndex(0)}
              style={{
              height: 180, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72,
              cursor: resolvedPhotos.length > 0 ? 'pointer' : 'default',
              background: listing.photos?.[0] && resolvePhoto(listing.photos[0])
                ? `url(${resolvePhoto(listing.photos[0])}) center/cover no-repeat`
                : `linear-gradient(135deg, ${C.greenDark}, ${C.green})`,
            }}>
              {!(listing.photos?.[0] && resolvePhoto(listing.photos[0])) && listing.emoji}
              <div style={{ position: 'absolute', top: 14, right: 14 }}><Badge type={listing.badge} /></div>
              <button onClick={() => setSaved(!saved)}
                style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 8, color: '#fff', padding: '6px 12px', fontSize: 13, cursor: 'pointer' }}>
                {saved ? '❤️ Saved' : '🤍 Save'}
              </button>
            </div>
            <div style={{ padding: '20px 24px' }}>
              <div style={{ fontSize: 11, color: C.green, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 }}>{listing.cat}</div>
              <h1 style={{ fontSize: 22, fontWeight: 800, color: C.black, margin: '0 0 4px', lineHeight: 1.2 }}>{listing.name}</h1>
              {listing.nameAm && <div style={{ fontSize: 15, color: '#888', marginBottom: 8 }}>{listing.nameAm}</div>}
              {listing.rating > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <Stars n={listing.rating} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.black }}>{listing.rating}.0</span>
                  <span style={{ fontSize: 12, color: '#aaa' }}>({listing.reviews} reviews)</span>
                </div>
              )}
              <div style={{ fontSize: 13, color: '#888', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <span>📍 {listing.city}, Ethiopia</span>
                {listing.phone && <span>📞 {listing.phone}</span>}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #eee', overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ display: 'flex', borderBottom: '1px solid #eee' }}>
              {['overview','reviews','photos', ...((listing.menu?.length || listing.menuCategories?.length) ? ['menu'] : []), 'hours'].map(t => (
                <button key={t} onClick={() => setTab(t)} style={{
                  flex: 1, padding: '13px 8px',
                  background: tab === t ? C.greenLight : 'transparent',
                  border: 'none',
                  borderBottom: tab === t ? `2px solid ${C.green}` : '2px solid transparent',
                  fontSize: 13, cursor: 'pointer',
                  color: tab === t ? C.greenDark : '#888',
                  fontWeight: tab === t ? 700 : 400,
                  textTransform: 'capitalize',
                }}>{t}</button>
              ))}
            </div>

            <div style={{ padding: 24 }}>
              {tab === 'overview' && (
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 10 }}>About</div>
                  <p style={{ fontSize: 14, color: '#555', lineHeight: 1.8, marginBottom: 20 }}>{listing.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    {[
                      ['📍 Location', `${listing.city}, Ethiopia`],
                      ['📞 Phone', listing.phone],
                      ['🏷 Category', listing.cat],
                      ['⭐ Rating', `${listing.rating}.0 / 5.0`],
                    ].map(([label, value]) => (
                      <div key={label} style={{ background: '#f7f7f6', borderRadius: 10, padding: '12px 14px' }}>
                        <div style={{ fontSize: 11, color: '#aaa', marginBottom: 4 }}>{label}</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: C.black }}>{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {tab === 'reviews' && (
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 16 }}>Customer Reviews</div>
                  <div style={{ textAlign: 'center', padding: '24px 0', color: '#bbb', fontSize: 13 }}>
                    No reviews yet. Be the first to leave one once this listing is live.
                  </div>
                </div>
              )}

              {tab === 'photos' && (
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 16 }}>Photos</div>
                  {listing.photos && listing.photos.length > 0 ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 10 }}>
                      {listing.photos.map((filename, i) => {
                        const src = resolvePhoto(filename);
                        return src ? (
                          <img key={i} src={src} alt={`${listing.name} ${i + 1}`}
                            onClick={() => setLightboxIndex(i)}
                            style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 10, cursor: 'pointer' }} />
                        ) : null;
                      })}
                    </div>
                  ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
                      {[...Array(6)].map((_, i) => (
                        <div key={i} style={{ aspectRatio: '1', background: `linear-gradient(${135 + i * 20}deg, ${C.greenLight}, ${C.greenDark}20)`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>
                          {listing.emoji}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {tab === 'menu' && (
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 16 }}>Menu</div>

                  {listing.menu?.length > 0 && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 14, marginBottom: listing.menuCategories?.length ? 24 : 0 }}>
                      {listing.menu.map((item, i) => {
                        const src = resolvePhoto(item.photo);
                        return (
                          <div key={i}>
                            {src ? (
                              <img src={src} alt={item.name}
                                onClick={() => setMenuLightboxIndex(i)}
                                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 10, cursor: 'pointer' }} />
                            ) : (
                              <div style={{ width: '100%', aspectRatio: '4/3', background: C.greenLight, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>
                                {listing.emoji}
                              </div>
                            )}
                            <div style={{ fontSize: 12, color: '#555', marginTop: 6, textAlign: 'center' }}>{item.name}</div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {listing.menuCategories?.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {listing.menuCategories.map((cat, ci) => {
                        const isOpen = openMenuCats.includes(ci);
                        const icon = CATEGORY_ICONS[cat.category] || '🍽';
                        return (
                          <div key={ci} style={{
                            borderRadius: 14, overflow: 'hidden', border: '1px solid #eee',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                          }}>
                            <button
                              onClick={() => setOpenMenuCats(prev =>
                                prev.includes(ci) ? prev.filter(x => x !== ci) : [...prev, ci]
                              )}
                              style={{
                                width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                                padding: '14px 16px', cursor: 'pointer', border: 'none', textAlign: 'left',
                                background: isOpen ? `linear-gradient(135deg, ${C.greenDark}, ${C.green})` : '#fff',
                              }}
                            >
                              <div style={{
                                width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                                background: isOpen ? 'rgba(255,255,255,0.18)' : C.greenLight,
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17,
                              }}>
                                {icon}
                              </div>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 14, fontWeight: 800, color: isOpen ? '#fff' : C.black }}>
                                  {cat.category}
                                </div>
                                {cat.categoryAm && (
                                  <div style={{ fontSize: 11.5, color: isOpen ? 'rgba(255,255,255,0.75)' : '#999', marginTop: 1 }}>
                                    {cat.categoryAm} · {cat.items.length} items
                                  </div>
                                )}
                              </div>
                              <div style={{
                                fontSize: 14, color: isOpen ? '#fff' : '#bbb',
                                transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s',
                              }}>
                                ⌄
                              </div>
                            </button>

                            {isOpen && (
                              <div style={{ background: '#fcfcfb' }}>
                                {cat.items.map((item, ii) => {
                                  const isSpecial = /special/i.test(item.name);
                                  return (
                                    <div key={ii} style={{
                                      display: 'flex', alignItems: 'baseline', gap: 10,
                                      padding: '11px 16px',
                                      borderTop: ii > 0 ? '1px solid #efefec' : 'none',
                                    }}>
                                      <div style={{
                                        width: 5, height: 5, borderRadius: 3, flexShrink: 0, marginTop: 6,
                                        background: isSpecial ? C.amber : C.green,
                                      }} />
                                      <div style={{ minWidth: 0, flex: 1 }}>
                                        <div style={{ fontSize: 13.5, color: C.black, fontWeight: isSpecial ? 700 : 600 }}>
                                          {item.name}
                                          {item.nameAm && <span style={{ color: '#999', fontWeight: 400 }}> · {item.nameAm}</span>}
                                          {isSpecial && (
                                            <span style={{
                                              marginLeft: 8, fontSize: 9.5, fontWeight: 800, color: C.amber,
                                              border: `1px solid ${C.amber}`, borderRadius: 4, padding: '1px 5px',
                                              letterSpacing: 0.4, verticalAlign: 'middle',
                                            }}>
                                              HOUSE PICK
                                            </span>
                                          )}
                                        </div>
                                        {item.desc && <div style={{ fontSize: 11.5, color: '#888', marginTop: 2, fontStyle: 'italic' }}>{item.desc}</div>}
                                      </div>
                                      {SHOW_MENU_PRICES && (
                                        <div style={{ fontSize: 13, fontWeight: 700, color: C.green, whiteSpace: 'nowrap' }}>{item.price} ETB</div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {tab === 'hours' && (
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 16 }}>Opening Hours</div>
                  <div style={{ textAlign: 'center', padding: '24px 0', color: '#bbb', fontSize: 13 }}>
                    Opening hours not provided yet. Call to confirm.
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

          {/* Contact card */}
          <div style={{ background: C.black, borderRadius: 16, padding: 20, border: `1px solid rgba(201,168,76,0.2)` }}>
            <div style={{ color: C.gold, fontSize: 12, fontWeight: 700, marginBottom: 14, letterSpacing: 0.5 }}>CONTACT {listing.type ? listing.type.toUpperCase() : 'BUSINESS'}</div>
            {listing.phone ? (
              <>
                <a href={`tel:${listing.phone}`}>
                  <button style={{ width: '100%', background: C.green, border: 'none', borderRadius: 10, padding: '12px', fontSize: 14, fontWeight: 700, color: '#fff', cursor: 'pointer', marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    📞 Call Now
                  </button>
                </a>
                <a href={`https://wa.me/${listing.phone.replace(/\s+/g,'').replace('+','')}`} target='_blank' rel='noreferrer'>
                  <button style={{ width: '100%', background: '#25D366', border: 'none', borderRadius: 10, padding: '12px', fontSize: 14, fontWeight: 700, color: '#fff', cursor: 'pointer', marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    💬 WhatsApp
                  </button>
                </a>
                <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginBottom: 6 }}>📞 Direct number</div>
                  <div style={{ fontSize: 14, color: C.gold, fontWeight: 700 }}>{listing.phone}</div>
                </div>
                {listing.phone2 && (
                  <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginBottom: 6 }}>📞 Alternate number</div>
                    <a href={`tel:${listing.phone2}`} style={{ fontSize: 14, color: C.gold, fontWeight: 700, textDecoration: 'none' }}>{listing.phone2}</a>
                  </div>
                )}
                {listing.instagram && (
                  <a href={listing.instagram} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <button style={{ width: '100%', marginTop: 10, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '10px', fontSize: 13, color: 'rgba(255,255,255,0.8)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                      📸 Follow on Instagram
                    </button>
                  </a>
                )}
              </>
            ) : (
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>No contact number on file yet.</div>
            )}
          </div>

          {/* Location card */}
          {(() => {
            // If we've confirmed this business has a Google Place ID (looked up
            // manually when GPS was added), link by name/place so Maps shows
            // its real listing — reviews, hours, photos. Otherwise fall back
            // to a bare coordinate pin.
            const directionsUrl = listing.lat && listing.lng
              ? (listing.placeId
                  ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(listing.name)}&query_place_id=${listing.placeId}`
                  : `https://www.google.com/maps/search/?api=1&query=${listing.lat},${listing.lng}`)
              : null;
            return (
          <div style={{ background: '#fff', borderRadius: 16, padding: 20, border: '1px solid #eee' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.black, marginBottom: 12, letterSpacing: 0.5 }}>📍 LOCATION</div>
            {directionsUrl ? (
              <a href={directionsUrl} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <div style={{ height: 120, background: `linear-gradient(135deg, ${C.greenLight}, #d4f0e4)`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, fontSize: 32, cursor: 'pointer' }}>
                  🗺
                </div>
              </a>
            ) : (
              <div style={{ height: 120, background: `linear-gradient(135deg, ${C.greenLight}, #d4f0e4)`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, fontSize: 32 }}>
                🗺
              </div>
            )}
            <div style={{ fontSize: 13, color: '#555' }}>{listing.city}, Ethiopia</div>
            {directionsUrl ? (
              <a href={directionsUrl} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <button style={{ marginTop: 10, width: '100%', background: C.greenLight, border: `1px solid ${C.green}`, borderRadius: 8, padding: '9px', fontSize: 12, color: C.greenDark, cursor: 'pointer', fontWeight: 600 }}>
                  Get directions →
                </button>
              </a>
            ) : (
              <button disabled style={{ marginTop: 10, width: '100%', background: '#f4f4f4', border: '1px solid #eee', borderRadius: 8, padding: '9px', fontSize: 12, color: '#bbb', cursor: 'not-allowed', fontWeight: 600 }}>
                Location not pinned yet
              </button>
            )}
          </div>
            );
          })()}

          {/* Share card */}
          <div style={{ background: '#fff', borderRadius: 16, padding: 20, border: '1px solid #eee' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.black, marginBottom: 12, letterSpacing: 0.5 }}>SHARE THIS LISTING</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {['📘 Facebook','📸 Instagram','💬 Telegram'].map(s => (
                <button key={s} style={{ flex: 1, background: '#f7f7f6', border: '1px solid #eee', borderRadius: 8, padding: '8px 4px', fontSize: 10, cursor: 'pointer', color: '#666' }}>{s}</button>
              ))}
            </div>
          </div>

          {/* Claim banner */}
          <div style={{ background: `linear-gradient(135deg, ${C.greenDark}, ${C.green})`, borderRadius: 16, padding: 18 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Is this your business?</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>Claim this listing and manage your profile for free.</div>
            <button onClick={() => onNav('list')} style={{ background: C.gold, border: 'none', borderRadius: 8, color: C.black, padding: '8px 16px', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
              Claim listing ↗
            </button>
          </div>

        </div>
      </div>

      {lightboxIndex !== null && (
        <PhotoLightbox
          srcs={resolvedPhotos}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {menuLightboxIndex !== null && (
        <PhotoLightbox
          srcs={resolvedMenuPhotos}
          startIndex={menuLightboxIndex}
          onClose={() => setMenuLightboxIndex(null)}
        />
      )}
    </div>
  );
}
