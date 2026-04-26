import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InstallPrompt from './components/InstallPrompt';
import MobilityPage from './pages/MobilityPage';
import VisaCheckerPage from './pages/VisaCheckerPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SpainPage from './pages/country/SpainPage';
import UKPage from './pages/country/UKPage';
import MexicoPage from './pages/country/MexicoPage';
import PortugalPage from './pages/country/PortugalPage';

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.28, ease: 'easeOut' } },
  exit:    { opacity: 0,        transition: { duration: 0.15 } },
};

// Scrolls to top on every page change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ position: 'relative', width: '100%' }}
      >
        <Routes location={location}>
          <Route path="/"                  element={<MobilityPage />} />
          <Route path="/mobility"          element={<MobilityPage />} />
          <Route path="/mobility/spain"    element={<SpainPage />} />
          <Route path="/mobility/uk"       element={<UKPage />} />
          <Route path="/mobility/mexico"   element={<MexicoPage />} />
          <Route path="/mobility/portugal" element={<PortugalPage />} />
          <Route path="/visa-checker"      element={<VisaCheckerPage />} />
          <Route path="/about"             element={<AboutPage />} />
          <Route path="/contact"           element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
        <InstallPrompt />
      </div>
    </BrowserRouter>
  );
}
