import { C } from '../data/constants';

// Marketplace and Tenders are deliberately not launched yet — both need
// real supply (sellers, institutional tender relationships) that don't
// exist for a brand-new directory. Don't rebuild these into full pages
// until the directory itself has real traffic to point at.
export default function ComingSoon({ title, onNav }) {
  return (
    <div style={{ background: '#F7F7F6', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ textAlign: 'center', maxWidth: 420 }}>
        <div style={{ fontSize: 44, marginBottom: 14 }}>🚧</div>
        <h1 style={{ fontSize: 22, fontWeight: 800, color: C.black, marginBottom: 8 }}>{title} — coming soon</h1>
        <p style={{ fontSize: 14, color: '#888', lineHeight: 1.6, marginBottom: 24 }}>
          We're focused on getting the Butajira business directory live first.
          {title} will launch once there's real demand to support it.
        </p>
        <button onClick={() => onNav('home')} style={{ background: C.green, border: 'none', borderRadius: 10, color: '#fff', padding: '12px 24px', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
          ← Back to Directory
        </button>
      </div>
    </div>
  );
}
