import { Routes, Route, useNavigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Navbar, Footer } from './components/UI';
import Home          from './pages/Home';
import ListingDetail from './pages/ListingDetail';
import ListBusiness  from './pages/ListBusiness';
import Pricing       from './pages/Pricing';
import Jobs          from './pages/Jobs';
import Institutions  from './pages/Institutions';
import ComingSoon    from './pages/ComingSoon';

// onNav(page) navigates to a real URL, so every page (including a
// single business listing) has its own shareable, bookmarkable link.
// onNav('listing', id) -> /listing/:id
export default function App() {
  const navigate = useNavigate();

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
        <Route path="/pricing"        element={<Pricing onNav={onNav} />} />
        <Route path="/jobs"           element={<Jobs onNav={onNav} />} />
        <Route path="/institutions"   element={<Institutions onNav={onNav} />} />
        <Route path="/marketplace"    element={<ComingSoon title="Marketplace" onNav={onNav} />} />
        <Route path="/tenders"        element={<ComingSoon title="Tenders" onNav={onNav} />} />
        <Route path="*"               element={<Home onNav={onNav} />} />
      </Routes>
      <Footer onNav={onNav} />
      <Analytics />
    </div>
  );
}
