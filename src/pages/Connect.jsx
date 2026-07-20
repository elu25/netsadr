import { C, SOCIALS, CONTACT } from '../data/constants';

// Link-in-bio style hub page for Elias's business card QR code.
// Only real, live links are listed here — no placeholder/future items.
// If a new channel goes live (e.g. office location, app download),
// add it to LINKS below rather than putting it on printed material first.

const ICONS = {
  website:  '🌐',
  bot:      '📱',
  channel:  '💬',
  fb:       '📘',
  ig:       '📸',
  tt:       '🎵',
  email:    '📧',
  call:     '📞',
};

const LINKS = [
  { key: 'website', label: 'Visit Website',     sub: CONTACT.domainEt,        href: `https://${CONTACT.domainEt}` },
  { key: 'bot',     label: 'Telegram Bot',       sub: '@netsadr_bot',          href: 'https://t.me/netsadr_bot' },
  { key: 'channel', label: 'Telegram Channel',   sub: '@netsadr',              href: 'https://t.me/netsadr' },
  { key: 'fb',      label: 'Facebook',           sub: '@netsadr',              href: SOCIALS.find(s => s.label === 'Facebook').url },
  { key: 'ig',      label: 'Instagram',          sub: '@netsa_dr',             href: SOCIALS.find(s => s.label === 'Instagram').url },
  { key: 'tt',      label: 'TikTok',             sub: '@netsa_dr',             href: SOCIALS.find(s => s.label === 'TikTok').url },
  { key: 'email',   label: 'Email',              sub: CONTACT.email,           href: `mailto:${CONTACT.email}` },
  { key: 'call',    label: 'Call',                sub: CONTACT.phone,          href: `tel:${CONTACT.phone.replace(/\s+/g, '')}` },
];

export default function Connect() {
  return (
    <div style={{ background: C.charcoal, minHeight: '100vh', padding: '48px 20px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 420, width: '100%' }}>

        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{
            width: 72, height: 72, borderRadius: 20, background: C.greenLight,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 32, margin: '0 auto 16px',
          }}>
            🏠
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 4 }}>
            Netsa<span style={{ color: C.green }}>Dr</span>
          </h1>
          <p style={{ fontSize: 13, color: '#B8B8B4' }}>
            Ethiopia's Digital Business Platform — Butajira's free business directory
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {LINKS.map(({ key, label, sub, href }) => (
            <a
              key={key}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                background: '#33332F', borderRadius: 14, padding: '14px 16px',
                textDecoration: 'none', border: '1px solid #44443E',
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10, background: C.green,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, flexShrink: 0,
              }}>
                {ICONS[key]}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{label}</div>
                <div style={{ fontSize: 12, color: '#9A9A94', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sub}</div>
              </div>
              <div style={{ color: '#6A6A64', fontSize: 16 }}>›</div>
            </a>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: 12, color: '#6A6A64', marginTop: 28 }}>
          Elias Sisay · Founder &amp; CEO
        </p>
      </div>
    </div>
  );
}
