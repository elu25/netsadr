import { C, INSTITUTIONS } from '../data/constants';

// Deliberately minimal. This is a test, not a committed product line —
// don't expand this list on a hunch. Watch whether people actually
// visit /institutions and click through before adding more entries
// or more categories (schools, clinics, etc).
export default function Institutions({ onNav }) {
  return (
    <div style={{ background: '#F7F7F6', minHeight: '100vh' }}>
      <div style={{ background: `linear-gradient(135deg, ${C.black}, ${C.charcoal})`, padding: '32px 20px 28px', borderBottom: `3px solid ${C.gold}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h1 style={{ color: '#fff', fontSize: 26, fontWeight: 800, margin: '0 0 6px' }}>🏛 Institutions</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>Churches, mosques, and government/utility offices in Butajira</p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14 }}>
          {INSTITUTIONS.map(i => (
            <div key={i.id}
              onClick={() => onNav('listing', i.id)}
              style={{ background: '#fff', border: '1px solid #eee', borderRadius: 14, padding: 18, cursor: 'pointer', display: 'flex', gap: 12, alignItems: 'center' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = C.green}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#eee'}>
              <div style={{ width: 44, height: 44, background: C.greenLight, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{i.emoji}</div>
              <div>
                <div style={{ fontSize: 10, color: C.green, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.4 }}>{i.type}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.black }}>{i.name}</div>
                <div style={{ fontSize: 12, color: '#aaa' }}>📍 {i.city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
