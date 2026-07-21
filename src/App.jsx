import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Categories from './pages/Categories';
import About from './pages/About';
import Contact from './pages/Contact';
import BuildPC from './pages/BuildPC';

// Scroll to top on route change component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Back to Top Button Component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-7 z-50 p-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-white rounded-full shadow-lg hover:border-[var(--accent-red)] hover:text-[var(--accent-red)] transition-all duration-300"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Animated Page Wrapper for smooth transitions
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="flex flex-col flex-grow w-full"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/shop"
          element={
            <PageWrapper>
              <Shop />
            </PageWrapper>
          }
        />
        <Route
          path="/product/:id"
          element={
            <PageWrapper>
              <ProductDetail />
            </PageWrapper>
          }
        />
        <Route
          path="/categories"
          element={
            <PageWrapper>
              <Categories />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
        <Route
          path="/build-pc"
          element={
            <PageWrapper>
              <BuildPC />
            </PageWrapper>
          }
        />
        {/* Fallback route redirects to home */}
        <Route
          path="*"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Global Background Elements */}
      <div className="global-bg-grid" />
      <div className="global-glow-blob-1" />
      <div className="global-glow-blob-2" />
      <div className="global-glow-blob-3" />

      {/* Sticky Header navbar */}
      <Header />
      
      {/* Core Dynamic Content */}
      <main className="flex-grow flex flex-col w-full" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedRoutes />
      </main>
      
      {/* Shared Footer panel */}
      <Footer />
      
      {/* Floating Helpers */}
      <WhatsAppFloating />
      <BackToTopButton />
    </Router>
  );
}

export default App;
