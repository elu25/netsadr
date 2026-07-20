import { C, SOCIALS, CONTACT } from '../data/constants';
import { Logo } from '../components/UI';

// Link-in-bio style hub page for Elias's business card QR code.
// Only real, live links are listed here — no placeholder/future items.
// Icons are inline SVG (not emoji) so they render identically across
// every OS/browser instead of depending on the visitor's emoji font.
// If a new channel goes live (e.g. office location, app download),
// add it to LINKS below rather than putting it on printed material first.

const Icon = ({ path }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {path}
  </svg>
);

const ICONS = {
  website: <Icon path={<><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></>} />,
  bot:     <Icon path={<><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H6l-3 2 1-4.5A8.5 8.5 0 1 1 21 11.5Z" /></>} />,
  channel: <Icon path={<><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>} />,
  fb:      <Icon path={<><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" /></>} />,
  ig:      <Icon path={<><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="#fff" /></>} />,
  tt:      <Icon path={<><path d="M9 12a4 4 0 1 0 4 4V4c1 2 3 3 5 3" /></>} />,
  email:   <Icon path={<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 6 10 7 10-7" /></>} />,
  call:    <Icon path={<><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 3a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.2-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .7 3 .8a2 2 0 0 1 1.7 2Z" /></>} />,
};

const LINKS = [
  { key: 'website', label: 'Visit Website',   sub: CONTACT.domainEt,       href: `https://${CONTACT.domainEt}` },
  { key: 'bot',     label: 'Telegram Bot',     sub: '@netsadr_bot',         href: 'https://t.me/netsadr_bot' },
  { key: 'channel', label: 'Telegram Channel', sub: '@netsadr',             href: 'https://t.me/netsadr' },
  { key: 'fb',      label: 'Facebook',         sub: '@netsadr',             href: SOCIALS.find(s => s.label === 'Facebook').url },
  { key: 'ig',      label: 'Instagram',        sub: '@netsa_dr',            href: SOCIALS.find(s => s.label === 'Instagram').url },
  { key: 'tt',      label: 'TikTok',           sub: '@netsa_dr',            href: SOCIALS.find(s => s.label === 'TikTok').url },
  { key: 'email',   label: 'Email',            sub: CONTACT.email,          href: `mailto:${CONTACT.email}` },
  { key: 'call',    label: 'Call',             sub: CONTACT.phone,          href: `tel:${CONTACT.phone.replace(/\s+/g, '')}` },
];

export default function Connect() {
  return (
    <div style={{ background: C.charcoal, minHeight: '100vh', padding: '48px 20px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 420, width: '100%' }}>

        <div style={{ textAlign: 'center', marginBottom: 32, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ transform: 'scale(1.4)', marginBottom: 22 }}>
            <Logo size="lg" />
          </div>
          <p style={{ fontSize: 13, color: '#B8B8B4', marginTop: 4 }}>
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
                flexShrink: 0,
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
