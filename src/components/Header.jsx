import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Gamepad2, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container flex-between">
          
          <Link to="/" className="header-logo flex-center">
            <Gamepad2 className="logo-icon" />
            <span className="logo-text">ROG<span>STORE</span></span>
          </Link>

          <nav className="header-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeHeaderNav"
                        className="nav-link-indicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <form onSubmit={handleSearchSubmit} className="search-form">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" aria-label="Submit search" className="search-submit">
                <Search className="search-icon" />
              </button>
            </form>
            <Link to="/build-pc" className="btn" style={{ background: 'var(--gradient-accent)', color: '#fff', padding: '8px 16px', fontSize: '14px', borderRadius: '6px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
              Build PC
            </Link>
            <Link to="/shop" className="icon-btn" aria-label="View Catalog">
              <ShoppingBag />
            </Link>
          </div>

          <div className="mobile-menu-toggle">
            <Link to="/shop" className="icon-btn mobile-shop-btn" aria-label="View Catalog">
              <ShoppingBag />
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="icon-btn toggle-btn" aria-label="Toggle menu">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="mobile-nav-overlay"
          >
            <form onSubmit={handleSearchSubmit} className="mobile-search-form">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-submit">
                <Search />
              </button>
            </form>

            <nav className="mobile-nav-links">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink to="/build-pc" className="mobile-nav-link" style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>
                Build Custom PC
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="header-spacer" />
    </>
  );
};

export default Header;
