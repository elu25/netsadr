import { useState } from 'react';
import { C, CATEGORIES, CITIES } from '../data/constants';
import logoIcon from '../assets/logo-icon.png';

const STEPS = ['Basic Info', 'Location & Contact', 'Details', 'Done'];

export default function ListBusiness({ onNav }) {
  const [step,   setStep]   = useState(0);
  const [form,   setForm]   = useState({
    name: '', category: '', city: '', phone: '', email: '',
    whatsapp: '', website: '', description: '', plan: 'free',
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const next = () => setStep(s => Math.min(s + 1, 3));
  const prev = () => setStep(s => Math.max(s - 1, 0));

  return (
    <div style={{ background: '#F7F7F6', minHeight: '100vh', padding: '32px 20px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <img src={logoIcon} alt="Netsadr" style={{ height: 52, width: 'auto', margin: '0 auto 14px', display: 'block' }} />
          <h1 style={{ fontSize: 24, fontWeight: 800, color: C.black, margin: '0 0 6px' }}>List your business free</h1>
          <p style={{ fontSize: 14, color: '#888' }}>List your Butajira business free on Netsadr.et</p>
        </div>

        {/* Step progress */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 28 }}>
          {STEPS.map((s, i) => (
            <div key={s} style={{ flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'relative' }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: i < step ? C.green : i === step ? C.gold : '#e8e8e8',
                color: i < step ? '#fff' : i === step ? C.black : '#aaa',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 700, zIndex: 1,
              }}>
                {i < step ? '✓' : i + 1}
              </div>
              <div style={{ fontSize: 10, color: i === step ? C.gold : i < step ? C.green : '#aaa', marginTop: 5, fontWeight: i === step ? 700 : 400, textAlign: 'center' }}>{s}</div>
              {i < STEPS.length - 1 && (
                <div style={{ position: 'absolute', top: 16, left: '50%', width: '100%', height: 2, background: i < step ? C.green : '#e8e8e8', zIndex: 0 }} />
              )}
            </div>
          ))}
        </div>

        {/* Form card */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #eee', padding: 28 }}>

          {/* STEP 0 — Basic Info */}
          {step === 0 && (
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.black, marginBottom: 20 }}>Basic Information</div>
              {[
                { label: 'Business Name *', key: 'name', placeholder: 'e.g. Selam Restaurant' },
              ].map(f => (
                <div key={f.key} style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>{f.label}</label>
                  <input value={form[f.key]} onChange={e => set(f.key, e.target.value)} placeholder={f.placeholder}
                    style={{ width: '100%', border: '1px solid #e8e8e8', borderRadius: 8, padding: '10px 14px', fontSize: 14, outline: 'none', color: C.black }} />
                </div>
              ))}
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>Category *</label>
                <select value={form.category} onChange={e => set('category', e.target.value)}
                  style={{ width: '100%', border: '1px solid #e8e8e8', borderRadius: 8, padding: '10px 14px', fontSize: 14, color: C.black, background: '#fff', cursor: 'pointer' }}>
                  <option value=''>Select category</option>
                  {CATEGORIES.map(c => <option key={c.label} value={c.label}>{c.icon} {c.label}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>Listing Plan</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {[
                    ['free','Free','Basic listing, no cost'],
                    ['basic','Basic','ETB 299/mo · 2 photos + direction'],
                    ['standard','Standard','ETB 499/mo · 5 photos + direction'],
                    ['premium','Premium ⭐','ETB 999/mo · 10 photos + video + direction'],
                  ].map(([val, label, sub]) => (
                    <div key={val} onClick={() => set('plan', val)}
                      style={{ flex: '1 1 130px', border: `2px solid ${form.plan === val ? (val === 'premium' ? C.gold : C.green) : '#eee'}`, borderRadius: 10, padding: '12px 10px', cursor: 'pointer', textAlign: 'center', background: form.plan === val ? (val === 'premium' ? '#FAEEDA' : C.greenLight) : '#fff' }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: val === 'premium' ? C.charcoal : C.black, marginBottom: 4 }}>{label}</div>
                      <div style={{ fontSize: 10, color: '#888' }}>{sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 1 — Location & Contact */}
          {step === 1 && (
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.black, marginBottom: 20 }}>Location & Contact</div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>City *</label>
                <select value={form.city} onChange={e => set('city', e.target.value)}
                  style={{ width: '100%', border: '1px solid #e8e8e8', borderRadius: 8, padding: '10px 14px', fontSize: 14, color: C.black, background: '#fff', cursor: 'pointer' }}>
                  <option value=''>Select city</option>
                  {CITIES.filter(c => c !== 'All Ethiopia').map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              {[
                { label: 'Phone Number *',   key: 'phone',    placeholder: '+251 9XX XXX XXX',  type: 'tel'   },
                { label: 'Email Address',    key: 'email',    placeholder: 'business@email.com', type: 'email' },
                { label: 'WhatsApp Number',  key: 'whatsapp', placeholder: '+251 9XX XXX XXX',  type: 'tel'   },
                { label: 'Website (optional)', key: 'website', placeholder: 'www.yourbusiness.com', type: 'url' },
              ].map(f => (
                <div key={f.key} style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>{f.label}</label>
                  <input type={f.type} value={form[f.key]} onChange={e => set(f.key, e.target.value)} placeholder={f.placeholder}
                    style={{ width: '100%', border: '1px solid #e8e8e8', borderRadius: 8, padding: '10px 14px', fontSize: 14, outline: 'none', color: C.black }} />
                </div>
              ))}
            </div>
          )}

          {/* STEP 2 — Details */}
          {step === 2 && (
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.black, marginBottom: 20 }}>Business Details</div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>Business Description *</label>
                <textarea value={form.description} onChange={e => set('description', e.target.value)}
                  placeholder="Describe your business, products or services. What makes you special?"
                  rows={5}
                  style={{ width: '100%', border: '1px solid #e8e8e8', borderRadius: 8, padding: '10px 14px', fontSize: 14, outline: 'none', color: C.black, resize: 'vertical' }} />
              </div>

              {/* Summary */}
              <div style={{ background: '#f7f7f6', borderRadius: 12, padding: 16, border: '1px solid #eee' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.black, marginBottom: 12 }}>📋 Summary</div>
                {[
                  ['Business', form.name || '—'],
                  ['Category', form.category || '—'],
                  ['City',     form.city || '—'],
                  ['Phone',    form.phone || '—'],
                  ['Plan',     form.plan.charAt(0).toUpperCase() + form.plan.slice(1)],
                ].map(([label, value]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 7 }}>
                    <span style={{ color: '#888' }}>{label}</span>
                    <span style={{ color: C.black, fontWeight: 600 }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 — Done */}
          {step === 3 && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ width: 72, height: 72, background: C.greenLight, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 36 }}>✅</div>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: C.black, margin: '0 0 10px' }}>Listing submitted!</h2>
              <p style={{ fontSize: 14, color: '#666', marginBottom: 6, lineHeight: 1.7 }}>
                Thank you, <strong>{form.name || 'your business'}</strong> has been submitted to Netsadr.et.<br />
                We will review and publish it within 24 hours.
              </p>
              <p style={{ fontSize: 13, color: '#aaa', marginBottom: 28 }}>
                Questions? Call us: <strong style={{ color: C.green }}>+251 931 631 332</strong>
              </p>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                <button onClick={() => onNav('home')} style={{ background: C.green, border: 'none', borderRadius: 10, color: '#fff', padding: '12px 24px', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                  ← Back to Directory
                </button>
                <button onClick={() => { setStep(0); setForm({ name:'',category:'',city:'',phone:'',email:'',whatsapp:'',website:'',description:'',plan:'free' }); }}
                  style={{ background: '#f7f7f6', border: '1px solid #eee', borderRadius: 10, color: '#666', padding: '12px 24px', fontSize: 14, cursor: 'pointer' }}>
                  Add another
                </button>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          {step < 3 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24, paddingTop: 20, borderTop: '1px solid #f0f0f0' }}>
              <button onClick={prev} disabled={step === 0}
                style={{ background: step === 0 ? '#f0f0f0' : '#fff', border: '1px solid #e8e8e8', borderRadius: 8, color: step === 0 ? '#ccc' : '#555', padding: '10px 20px', fontSize: 13, cursor: step === 0 ? 'not-allowed' : 'pointer' }}>
                ← Back
              </button>
              <button onClick={next}
                style={{ background: C.gold, border: 'none', borderRadius: 8, color: C.black, padding: '10px 24px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
                {step === 2 ? 'Submit listing ✓' : 'Continue →'}
              </button>
            </div>
          )}
        </div>

        <p style={{ textAlign: 'center', fontSize: 12, color: '#bbb', marginTop: 20 }}>
          By listing, you agree to Netsadr.et's terms. Contact: elias.netsadr@gmail.com
        </p>
      </div>
    </div>
  );
}
