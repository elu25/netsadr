import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Navbar, Footer } from './components/UI';
import Home          from './pages/Home';
import ListingDetail from './pages/ListingDetail';
import ListBusiness  from './pages/ListBusiness';
import Jobs          from './pages/Jobs';
import Institutions  from './pages/Institutions';
import Privacy       from './pages/Privacy';
import ComingSoon    from './pages/ComingSoon';

// onNav(page) navigates to a real URL, so every page (including a
// single business listing) has its own shareable, bookmarkable link.
// onNav('listing', id) -> /listing/:id
export default function App() {
  const navigate = useNavigate();

  // Only activates when this site is opened inside Telegram as a Mini App
  // (window.Telegram.WebApp only exists there). Regular web visitors are
  // completely unaffected — this is a safe no-op for them.
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand(); // use full screen height instead of Telegram's default small sheet
    }
  }, []);

  const onNav = (page, data = null) => {
    const path = page === 'home' ? '/'
      : page === 'listing' ? `/listing/${data}`
      : `/${page}`;
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar onNav={onNav} />
      <Routes>
        <Route path="/"               element={<Home onNav={onNav} />} />
        <Route path="/listing/:id"    element={<ListingDetail onNav={onNav} />} />
        <Route path="/list"           element={<ListBusiness onNav={onNav} />} />
        <Route path="/jobs"           element={<Jobs onNav={onNav} />} />
        <Route path="/institutions"   element={<Institutions onNav={onNav} />} />
        <Route path="/privacy"        element={<Privacy onNav={onNav} />} />
        <Route path="/marketplace"    element={<ComingSoon title="Marketplace" onNav={onNav} />} />
        <Route path="/tenders"        element={<ComingSoon title="Tenders" onNav={onNav} />} />
        <Route path="*"               element={<Home onNav={onNav} />} />
      </Routes>
      <Footer onNav={onNav} />
      <Analytics />
    </div>
  );
}
