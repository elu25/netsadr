import { useState } from 'react';
import { C } from '../data/constants';

const JOBS = [
  { id:6,  title:'Graphic Designer',            company:'Netsadr.et',              city:'Butajira',    salary:'ETB 7,000–10,000',  type:'Part-time',  sector:'Design',       emoji:'🎨', posted:'Today'       },
  { id:8,  title:'Agricultural Extension Agent',company:'Highlands Farms',         city:'Butajira',    salary:'ETB 6,500–8,500',   type:'Full-time',  sector:'Agriculture',  emoji:'🌿', posted:'4 days ago'  },
];

const SECTORS = ['All','Design','Agriculture'];

export default function Jobs() {
  const [sector, setSector] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = JOBS.filter(j =>
    (sector === 'All' || j.sector === sector) &&
    (!search || j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ background: '#F7F7F6', minHeight: '100vh' }}>

      <div style={{ background: `linear-gradient(135deg, ${C.black}, ${C.charcoal})`, padding: '32px 20px 28px', borderBottom: `3px solid ${C.gold}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h1 style={{ color: '#fff', fontSize: 26, fontWeight: 800, margin: '0 0 6px' }}>💼 Jobs</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, marginBottom: 20 }}>Find jobs and post vacancies in Butajira</p>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, overflow: 'hidden', flex: 1 }}>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search jobs, companies…"
                style={{ background: 'transparent', border: 'none', padding: '10px 14px', fontSize: 13, color: '#fff', outline: 'none', flex: 1 }} />
            </div>
            <button style={{ background: C.gold, border: 'none', borderRadius: 10, color: C.black, padding: '10px 18px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
              + Post a job
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 20px' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
          {SECTORS.map(s => (
            <span key={s} onClick={() => setSector(s)}
              style={{ background: sector === s ? C.green : '#fff', color: sector === s ? '#fff' : '#666', border: `1px solid ${sector === s ? C.green : '#eee'}`, borderRadius: 20, padding: '5px 14px', fontSize: 12, cursor: 'pointer', fontWeight: sector === s ? 700 : 400 }}>
              {s}
            </span>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
          {filtered.map(j => (
            <div key={j.id}
              style={{ background: '#fff', border: '1px solid #eee', borderRadius: 14, padding: 18, cursor: 'pointer', transition: 'all 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.green; e.currentTarget.style.boxShadow = '0 4px 16px rgba(29,158,117,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#eee'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                <div style={{ width: 44, height: 44, background: C.greenLight, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{j.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 2 }}>{j.title}</div>
                  <div style={{ fontSize: 12, color: '#888' }}>{j.company}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
                <span style={{ background: C.greenLight, color: C.greenDark, borderRadius: 8, padding: '3px 9px', fontSize: 10, fontWeight: 600 }}>{j.type}</span>
                <span style={{ background: '#f4f4f4', color: '#666', borderRadius: 8, padding: '3px 9px', fontSize: 10 }}>📍 {j.city}</span>
                <span style={{ background: '#f4f4f4', color: '#666', borderRadius: 8, padding: '3px 9px', fontSize: 10 }}>🕐 {j.posted}</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.greenDark, marginBottom: 12 }}>{j.salary}</div>
              <button style={{ width: '100%', background: C.green, border: 'none', borderRadius: 8, padding: '8px', fontSize: 12, fontWeight: 700, color: '#fff', cursor: 'pointer' }}>
                Apply now →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
