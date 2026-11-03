import { C } from '../data/constants';

// No vacancies are posted yet. Don't add sample/fake jobs here — only real
// ones sent in by employers. Add them to this array as { id, title, company,
// city, salary, type, posted } when they arrive.
const JOBS = [];

const WA = 'https://wa.me/251931631332?text=' + encodeURIComponent('Hello Netsadr, I want to post a job vacancy.');

export default function Jobs() {
  return (
    <div style={{ background: '#F7F7F6', minHeight: '100vh' }}>
      <div style={{ background: `linear-gradient(135deg, ${C.black}, ${C.charcoal})`, padding: '32px 20px 28px', borderBottom: `3px solid ${C.gold}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h1 style={{ color: '#fff', fontSize: 26, fontWeight: 800, margin: '0 0 6px' }}>💼 Jobs</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, marginBottom: 20 }}>Vacancies from local employers</p>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: C.gold, borderRadius: 10, color: C.black, padding: '10px 18px', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
            + Post a job (WhatsApp)
          </a>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '20px' }}>
        {JOBS.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#888' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>💼</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: C.black, marginBottom: 6 }}>No vacancies posted yet</div>
            <div style={{ fontSize: 13, lineHeight: 1.6 }}>
              Hiring? Send us your vacancy on WhatsApp and we'll list it here.
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
            {JOBS.map(j => (
              <div key={j.id} style={{ background: '#fff', border: '1px solid #eee', borderRadius: 14, padding: 18 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 2 }}>{j.title}</div>
                <div style={{ fontSize: 12, color: '#888', marginBottom: 10 }}>{j.company} · 📍 {j.city}</div>
                {j.salary && <div style={{ fontSize: 14, fontWeight: 700, color: C.greenDark }}>{j.salary}</div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
