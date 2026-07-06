import { C, PLANS } from '../data/constants';

export default function Pricing({ onNav }) {
  return (
    <div style={{ background: '#F7F7F6', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${C.black}, ${C.charcoal})`, padding: '48px 20px 40px', textAlign: 'center', borderBottom: `3px solid ${C.gold}` }}>
        <div style={{ display: 'inline-block', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 20, padding: '4px 16px', marginBottom: 16 }}>
          <span style={{ color: C.gold, fontSize: 12, fontWeight: 600 }}>Simple, transparent pricing</span>
        </div>
        <h1 style={{ color: '#fff', fontSize: 32, fontWeight: 800, margin: '0 0 10px', letterSpacing: -0.8 }}>
          Choose your <span style={{ color: C.gold }}>plan</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15 }}>
          Start free. Upgrade anytime. All prices in Ethiopian Birr.
        </p>
      </div>

      {/* Plans */}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 48 }}>
          {PLANS.map((plan, i) => {
            const isPremium = plan.name === 'Premium';
            const isStandard = plan.name === 'Standard';
            return (
              <div key={plan.name} style={{
                background: isPremium ? C.black : '#fff',
                border: `2px solid ${isPremium ? C.gold : isStandard ? C.green : '#eee'}`,
                borderRadius: 18, padding: 28, position: 'relative',
                transform: isStandard ? 'translateY(-8px)' : 'none',
                boxShadow: isStandard ? `0 8px 32px rgba(29,158,117,0.15)` : isPremium ? `0 8px 32px rgba(201,168,76,0.15)` : 'none',
              }}>
                {plan.badge && (
                  <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: isStandard ? C.green : C.gold, color: isStandard ? '#fff' : C.black, borderRadius: 20, padding: '3px 14px', fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap' }}>
                    {plan.badge}
                  </div>
                )}
                <div style={{ fontSize: 16, fontWeight: 700, color: isPremium ? C.gold : C.black, marginBottom: 6 }}>{plan.name}</div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 4 }}>
                  <span style={{ fontSize: 36, fontWeight: 800, color: isPremium ? '#fff' : C.black, lineHeight: 1 }}>
                    {plan.price === 0 ? 'Free' : `ETB ${plan.price.toLocaleString()}`}
                  </span>
                  {plan.price > 0 && <span style={{ fontSize: 13, color: isPremium ? 'rgba(255,255,255,0.45)' : '#aaa', paddingBottom: 6 }}>/month</span>}
                </div>
                {plan.price > 0 && (
                  <div style={{ fontSize: 11, color: isPremium ? 'rgba(255,255,255,0.3)' : '#bbb', marginBottom: 20 }}>
                    ETB {(plan.price * 12).toLocaleString()} billed annually
                  </div>
                )}
                {plan.price === 0 && <div style={{ height: 20, marginBottom: 20 }} />}

                <div style={{ borderTop: `1px solid ${isPremium ? 'rgba(201,168,76,0.15)' : '#f0f0f0'}`, paddingTop: 20, marginBottom: 24 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 11 }}>
                      <span style={{ color: isPremium ? C.gold : C.green, fontSize: 14, flexShrink: 0, marginTop: 1 }}>✓</span>
                      <span style={{ fontSize: 13, color: isPremium ? 'rgba(255,255,255,0.75)' : '#555', lineHeight: 1.4 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <button onClick={() => onNav('list')} style={{
                  width: '100%', border: 'none', borderRadius: 10, padding: '12px',
                  fontSize: 14, fontWeight: 700, cursor: 'pointer',
                  background: isPremium ? C.gold : isStandard ? C.green : C.greenLight,
                  color: isPremium ? C.black : isStandard ? '#fff' : C.greenDark,
                }}>
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: C.black, textAlign: 'center', marginBottom: 24 }}>Frequently asked questions</h2>
          {[
            ['Is the free listing really free?',           'Yes, 100% free forever. No credit card required. You can list your business name, phone, city and category at no cost.'],
            ['How do I pay for Standard or Premium?',      'You can pay via Telebirr, CBE Birr, or bank transfer. Contact us on +251 931 631 332 and we will set it up for you.'],
            ['How long does it take to appear online?',    'Free listings appear within 24 hours. Standard and Premium listings are reviewed and published within a few hours.'],
            ['Can I upgrade from Free to Standard later?', 'Yes, you can upgrade anytime. Just contact us and we will update your listing immediately.'],
            ['Do you serve businesses outside Butajira?',  'Right now we\'re focused on Butajira only, to make sure the directory works well before expanding to other cities.'],
          ].map(([q, a]) => (
            <div key={q} style={{ background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: '16px 20px', marginBottom: 10 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 8 }}>{q}</div>
              <div style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: 40, padding: 32, background: `linear-gradient(135deg, ${C.black}, ${C.charcoal})`, borderRadius: 18, border: `1px solid rgba(201,168,76,0.2)` }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Still have questions?</div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>Call or WhatsApp Elias directly — we are based in Butajira.</div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+251931631332">
              <button style={{ background: C.green, border: 'none', borderRadius: 10, color: '#fff', padding: '11px 24px', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>📞 +251 931 631 332</button>
            </a>
            <a href="mailto:elias.netsadr@gmail.com">
              <button style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, color: '#fff', padding: '11px 24px', fontSize: 14, cursor: 'pointer' }}>✉️ elias.netsadr@gmail.com</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
