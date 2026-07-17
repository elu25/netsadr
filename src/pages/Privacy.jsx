import { C } from '../data/constants';

export default function Privacy() {
  return (
    <div style={{ background: '#F7F7F6', minHeight: '100vh', padding: '32px 20px' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', background: '#fff', borderRadius: 16, border: '1px solid #eee', padding: '32px 28px' }}>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: C.black, marginBottom: 6 }}>Privacy Policy</h1>
        <p style={{ fontSize: 13, color: '#aaa', marginBottom: 24 }}>Last updated: July 2026</p>

        <p style={{ fontSize: 14, color: '#444', lineHeight: 1.8, marginBottom: 20 }}>
          Netsadr.et is a free business directory for Butajira, Ethiopia. This page explains, plainly, what
          happens to information on this site and through the Netsadr Telegram bot.
        </p>

        <h2 style={{ fontSize: 16, fontWeight: 700, color: C.black, marginTop: 24, marginBottom: 8 }}>What we collect</h2>
        <p style={{ fontSize: 14, color: '#444', lineHeight: 1.8, marginBottom: 12 }}>
          We use Vercel Web Analytics to see anonymous, aggregate visit counts — how many people visit the
          site and which pages they view. This does not use cookies and does not identify individual
          visitors personally.
        </p>
        <p style={{ fontSize: 14, color: '#444', lineHeight: 1.8, marginBottom: 12 }}>
          The "List Your Business" form asks for a business name, category, phone number, and description.
          As of this writing, this site has no backend server or database — information entered in that
          form is not stored or transmitted anywhere automatically. Business owners who want to be listed
          should also contact us directly (phone or email below) so a listing can be added manually. If
          this changes in the future — for example, if the form starts saving directly to a database — this
          page will be updated to say so before that happens.
        </p>

        <h2 style={{ fontSize: 16, fontWeight: 700, color: C.black, marginTop: 24, marginBottom: 8 }}>Business listings</h2>
        <p style={{ fontSize: 14, color: '#444', lineHeight: 1.8, marginBottom: 12 }}>
          Names, categories, phone numbers, and locations shown in the directory are business contact
          information, voluntarily provided by business owners (or collected in person by Netsadr) so
          customers can find and reach them. This is public business information, not private personal data.
          If you're a business owner and want your listing corrected or removed, contact us below.
        </p>

        <h2 style={{ fontSize: 16, fontWeight: 700, color: C.black, marginTop: 24, marginBottom: 8 }}>The Netsadr Telegram bot</h2>
        <p style={{ fontSize: 14, color: '#444', lineHeight: 1.8, marginBottom: 12 }}>
          The Netsadr bot on Telegram currently does one thing: it opens this website inside Telegram using
          Telegram's Mini App feature. It does not read your messages, does not store your Telegram
          information, and has no server-side logic of its own.
        </p>

        <h2 style={{ fontSize: 16, fontWeight: 700, color: C.black, marginTop: 24, marginBottom: 8 }}>No ads, no data sales</h2>
        <p style={{ fontSize: 14, color: '#444', lineHeight: 1.8, marginBottom: 12 }}>
          We don't sell data to third parties, and we don't run third-party ad-tracking scripts on this site.
        </p>

        <h2 style={{ fontSize: 16, fontWeight: 700, color: C.black, marginTop: 24, marginBottom: 8 }}>Contact</h2>
        <p style={{ fontSize: 14, color: '#444', lineHeight: 1.8 }}>
          Questions about this policy, or about a listing: Elias Sisay, +251 931 631 332,
          elias.netsadr@gmail.com, Butajira, Ethiopia.
        </p>
      </div>
    </div>
  );
}
