import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Wrench,
  HelpCircle,
  Sparkles,
  Smartphone,
  Cpu,
  Monitor,
  Laptop,
  Layers,
  Gamepad2,
  ChevronRight,
  Star
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import SEOMetadata from '../components/SEOMetadata';
import WhatsAppIcon from '../components/WhatsAppIcon';

const modules = import.meta.glob('../data/products/*.json', { eager: true });
const productsDataRaw = Object.values(modules).map(module => module.default);
const productsData = productsDataRaw;

const Home = () => {
  // Get 6 featured products (filled 3-column layout)
  const featuredIds = ['pc-ultimate-gaming', 'custom-hardline-red', 'cpu-ryzen-7800x3d', 'gpu-rog-rtx-5080', 'mon-rog-oled-32', 'kb-rog-azoth'];
  const featuredProducts = productsData.filter(p => featuredIds.includes(p.id));

  // 5 Premium Categories for Home (Laptops removed)
  const premiumCategories = [
    { name: 'Gaming PCs', icon: Monitor, query: 'Gaming PCs', image: '/images/cat_pcs.png' },
    { name: 'Custom Builds', icon: Wrench, query: 'Custom PCs', image: '/images/cat_custom.png' },
    { name: 'Graphics Cards', icon: Layers, query: 'Graphics Cards', image: '/images/cat_gpus.png' },
    { name: 'Monitors', icon: Monitor, query: 'Gaming Monitors', image: '/images/cat_monitors.png' },
    { name: 'Accessories', icon: Gamepad2, query: 'Accessories', image: '/images/cat_accessories.png' }
  ];

  const getProductCount = (query) => {
    return productsData.filter((p) => p.category.toLowerCase().includes(query.toLowerCase())).length;
  };

  const topBrands = [
    { name: 'ASUS', logo: 'https://cdn.simpleicons.org/asus/00539B' },
    { name: 'ROG', logo: 'https://cdn.simpleicons.org/republicofgamers/FF0029' },
    { name: 'MSI', logo: 'https://cdn.simpleicons.org/msi/FF0000' },
    { name: 'Gigabyte', logo: 'https://cdn.simpleicons.org/gigabyte/000000' },
    { name: 'Intel', logo: 'https://cdn.simpleicons.org/intel/0068B5' },
    { name: 'AMD', logo: 'https://cdn.simpleicons.org/amd/ED1C24' },
    { name: 'NVIDIA', logo: 'https://cdn.simpleicons.org/nvidia/76B900' },
    { name: 'Corsair', logo: 'https://cdn.simpleicons.org/corsair/000000' },
  ];

  const whyChooseUs = [
    {
      title: 'Genuine Products',
      desc: '100% original hardware and components imported directly from official distributors.',
      icon: ShieldCheck
    },
    {
      title: 'Official Warranty',
      desc: 'Hassle-free local and international manufacturer warranties supported by our store.',
      icon: ShieldCheck
    },
    {
      title: 'Custom PC Building',
      desc: 'Tailor-made liquid cooled rigs and workstations assembled by expert hardware technicians.',
      icon: Wrench
    }
  ];

  const testimonials = [
    {
      name: 'Zain Ahmed',
      role: 'Competitive Valorant Player',
      text: 'ROG Store built my dream Ryzen 7 7800X3D rig. The cable management is clean, and the temperatures are outstanding. Highly recommended!',
      rating: 5
    },
    {
      name: 'Farhan Abbasi',
      role: '3D Render Artist',
      text: 'Bought a dual RTX 4090 workstation. Excellent customer support, genuine products, and expert guidance.',
      rating: 5
    },
    {
      name: 'Sana Ullah',
      role: 'Casual Gamer & Vlogger',
      text: 'Purchased an ASUS Zephyrus laptop. They verified the international warranty and did the initial system setups for me.',
      rating: 5
    }
  ];

  const whatsappUrl = 'https://wa.me/923471100056?text=Hello%20ROG%20Store%2C%20I%20would%20like%20to%20consult%20about%20building%20a%20gaming%20PC%20or%20buying%20hardware.';

  return (
    <>
      <SEOMetadata
        title="Pakistan's Premium Computer & Gaming Store"
        description="Browse premium custom gaming PCs, laptops, graphics cards, motherboards, processors, and accessories."
        keywords="Gaming PCs Rawalpindi, Premium Computer Store, Best Gaming Laptops Pakistan, Custom PC Assembly"
      />

      {/* Hero Banner Section (Redesigned Premium) */}
      <section className="hero-section">
        <div className="container grid-cols-2" style={{ alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ paddingRight: '20px' }}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: 'clamp(40px, 4.8vw, 64px)', lineHeight: 1.1, marginBottom: '24px', color: 'var(--text-charcoal)', letterSpacing: '-0.03em', fontWeight: 800 }}
            >
              Your Trusted <br />
              <span style={{ background: 'linear-gradient(135deg, var(--accent-red) 0%, #9333ea 50%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Computer & Gaming
              </span>{' '}
              Store
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.6, maxWidth: '540px' }}
            >
              High-end Gaming PCs, custom builds, original computer components, and accessories. Assembled by experts, verified by you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}
            >
              <Link to="/shop" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px', fontWeight: 600 }}>
                Browse Products
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '16px', backgroundColor: '#fff', display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid var(--border-color)', fontWeight: 600 }}>
                <WhatsAppIcon size={20} /> Contact Us
              </a>
            </motion.div>

          </div>

          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Immersive Glass Frame for Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hero-image-frame"
              style={{ width: '100%' }}
            >
              <div className="hero-image-inner">
                <img
                  src="/images/home_hero.png"
                  alt="High-End ROG Gaming PC Setup"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid Section (Light Gray) */}
      <section style={{ backgroundColor: 'transparent', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h2 style={{ fontSize: '36px', color: 'var(--text-charcoal)', marginBottom: '16px' }}>Shop by Category</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>Explore our premium selection of computing gear.</p>
            </div>
            <Link to="/categories" className="btn btn-secondary" style={{ backgroundColor: '#fff' }}>
              View All Categories <ChevronRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {premiumCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              const count = getProductCount(cat.query);

              return (
                <Link
                  key={idx}
                  to={`/shop?category=${encodeURIComponent(cat.query)}`}
                  style={{
                    position: 'relative', borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', height: '320px', display: 'block', textDecoration: 'none', boxShadow: 'var(--shadow-md)'
                  }}
                  className="rgb-glow-hover"
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(17,24,39,0.9) 0%, rgba(17,24,39,0.2) 60%, rgba(255,255,255,0) 100%)' }}></div>
                  </div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px', display: 'flex', flexDirection: 'column', zIndex: 2 }}>
                    <div className="flex-between" style={{ marginBottom: '12px' }}>
                      <div className="flex-center" style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', color: '#fff' }}>
                        <IconComp size={20} />
                      </div>
                    </div>
                    <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '4px' }}>{cat.name}</h3>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{count} Products Available</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section (Off White) */}
      <section style={{ backgroundColor: 'transparent', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h2 style={{ fontSize: '36px', color: 'var(--text-charcoal)', marginBottom: '16px' }}>Featured Store Items</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>A handpicked selection of our top-tier custom rigs and premium hardware.</p>
            </div>
            <Link to="/shop" className="btn btn-primary">
              View Full Catalog <ChevronRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Marquee Brands Section */}
      <section style={{ backgroundColor: 'transparent', overflow: 'hidden' }}>
        <div className="container" style={{ paddingTop: '60px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '32px', color: 'var(--text-charcoal)', marginBottom: '8px' }}>Brands We Deal In</h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>Genuine components from the world's leading manufacturers.</p>
          </div>
        </div>
        
        <div className="marquee-container" style={{ padding: '40px 0' }}>
          <div className="marquee-content" style={{ gap: '80px' }}>
            {/* First set of logos */}
            {topBrands.map((brand, idx) => (
              <div key={`brand1-${idx}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '110px', minWidth: '220px', padding: '0 32px' }}>
                <img src={brand.logo} alt={brand.name} style={{ height: '90px', maxWidth: '200px', objectFit: 'contain', filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.05))' }} />
              </div>
            ))}
            {/* Second set of logos for seamless looping */}
            {topBrands.map((brand, idx) => (
              <div key={`brand2-${idx}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '110px', minWidth: '220px', padding: '0 32px' }}>
                <img src={brand.logo} alt={brand.name} style={{ height: '90px', maxWidth: '200px', objectFit: 'contain', filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.05))' }} />
              </div>
            ))}
            {/* Third set of logos to ensure it covers wide screens */}
            {topBrands.map((brand, idx) => (
              <div key={`brand3-${idx}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '110px', minWidth: '220px', padding: '0 32px' }}>
                <img src={brand.logo} alt={brand.name} style={{ height: '90px', maxWidth: '200px', objectFit: 'contain', filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.05))' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Warm White) */}
      <section style={{ backgroundColor: 'transparent', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '700px', margin: '0 auto 64px auto' }}>
            <h2 style={{ fontSize: '36px', color: 'var(--text-charcoal)', marginBottom: '16px' }}>The Premium Difference</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>How we differentiate ourselves as a trusted desktop building hub.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="rgb-glow-hover" style={{ backgroundColor: '#fff', padding: '40px', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'var(--bg-blue-gray)', color: 'var(--accent-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <IconComp size={28} />
                  </div>
                  <h3 style={{ fontSize: '20px', color: 'var(--text-charcoal)', marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials (Off White) */}
      <section style={{ backgroundColor: 'transparent', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '36px', color: 'var(--text-charcoal)', marginBottom: '16px' }}>Community Trust</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>See what our premium clients have to say.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {testimonials.map((t, idx) => (
              <div key={idx} style={{ backgroundColor: '#fff', padding: '40px', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '4px', color: '#F59E0B', marginBottom: '24px' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p style={{ fontSize: '16px', color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '32px', flexGrow: 1, lineHeight: 1.6 }}>"{t.text}"</p>
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '24px' }}>
                  <h4 style={{ fontSize: '16px', color: 'var(--text-charcoal)', fontWeight: 700 }}>{t.name}</h4>
                  <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Gradient) */}
      <section style={{ background: 'var(--gradient-accent)', padding: '100px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '64px 40px', borderRadius: 'var(--border-radius-lg)', border: '1px solid rgba(255,255,255,0.2)', maxWidth: '800px', margin: '0 auto', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            <h2 style={{ fontSize: '40px', color: '#fff', marginBottom: '20px' }}>Ready for a Premium Build?</h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
              Chat with us directly to discuss your specific requirements. We offer personalized quotations and expert advice.
            </p>
            <a href="https://wa.me/923471100056" target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ padding: '16px 36px', fontSize: '18px', boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)', display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
              <WhatsAppIcon size={22} /> Connect with an Expert
            </a>
          </div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{__html: `
        /* Hero redesign styles */
        .hero-section {
          position: relative;
          background-color: transparent;
          padding: 40px 0 60px 0;
          overflow: hidden;
        }

        /* Glass card frame around hero image */
        .hero-image-frame {
          position: relative;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 24px;
          padding: 16px;
          box-shadow: 
            0 4px 30px rgba(0, 0, 0, 0.03),
            0 1px 3px rgba(0, 0, 0, 0.02),
            inset 0 0 0 1px rgba(255, 255, 255, 0.5);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-image-frame:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.08),
            0 1px 10px rgba(229, 57, 53, 0.05);
        }
        .hero-image-inner {
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }
        .hero-image-inner::after {
          content: '';
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 20px rgba(255,255,255,0.1);
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 30px 0 40px 0;
          }
        }
      `}} />
    </>
  );
};

export default Home;
