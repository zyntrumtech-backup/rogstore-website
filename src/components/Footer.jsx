import { Link } from 'react-router-dom';
import { Gamepad2, MapPin, Phone, Mail, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--bg-charcoal)', color: '#fff', paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px', paddingBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '40px' }}>
          {/* Brand & About */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', textDecoration: 'none' }}>
              <Gamepad2 color="var(--accent-red)" size={32} />
              <span style={{ fontSize: '24px', fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
                ROG<span style={{ color: 'var(--accent-red)' }}>STORE</span>
              </span>
            </Link>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '32px' }}>
              Rawalpindi's premier destination for custom gaming PCs, enthusiast hardware, and professional liquid cooling builds. Official warranties and genuine products guaranteed.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'all 0.3s ease' }} className="social-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'all 0.3s ease' }} className="social-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'all 0.3s ease' }} className="social-btn" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'all 0.3s ease' }} className="social-btn" aria-label="Youtube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '24px' }}>Explore</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/shop" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.3s ease' }}>Showroom Catalog</Link></li>
              <li><Link to="/categories" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.3s ease' }}>Hardware Categories</Link></li>
              <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.3s ease' }}>Our Story</Link></li>
              <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.3s ease' }}>Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '24px' }}>Store Info</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
                <MapPin size={18} color="var(--accent-red)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>ROG Store, Midway Center<br />Rawalpindi, Pakistan</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
                <WhatsAppIcon size={18} color="var(--accent-red)" style={{ flexShrink: 0 }} />
                <span>0347-1100056</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
                <Clock size={18} color="var(--accent-red)" style={{ flexShrink: 0 }} />
                <span>Full Week, 9AM-11AM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
            &copy; {currentYear} ROG Store Pakistan. All rights reserved. Powered by Zyntrum Tech.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/contact" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/contact" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .social-btn:hover {
          background-color: var(--accent-red) !important;
          transform: translateY(-3px);
        }
        .footer-link:hover {
          color: #fff !important;
        }
      `}} />
    </footer>
  );
};

export default Footer;
