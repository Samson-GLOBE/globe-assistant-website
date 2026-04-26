import { Routes, Route, useLocation, BrowserRouter, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import MobilityPage from './pages/MobilityPage';
import VisaCheckerPage from './pages/VisaCheckerPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
};

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}
    >
      {children}
    </motion.div>
  );
}

function AppInner() {
  const location = useLocation();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <Navbar />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            {/* Root redirects to Mobility — no separate Home page */}
            <Route path="/" element={<Navigate to="/mobility" replace />} />
            <Route path="/mobility" element={
              <AnimatedPage><MobilityPage /></AnimatedPage>
            } />
            <Route path="/visa" element={
              <AnimatedPage><VisaCheckerPage /></AnimatedPage>
            } />
            <Route path="/contact" element={
              <AnimatedPage><ContactPage /></AnimatedPage>
            } />
            {/* Catch-all — redirect unknown routes to mobility */}
            <Route path="*" element={<Navigate to="/mobility" replace />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
