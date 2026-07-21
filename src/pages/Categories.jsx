import { Link } from 'react-router-dom';
import {
  Monitor,
  Wrench,
  Layers,
  Gamepad2,
  ChevronRight,
  Cpu
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEOMetadata from '../components/SEOMetadata';

const modules = import.meta.glob('../data/products/*.json', { eager: true });
const productsDataRaw = Object.values(modules).map(module => module.default);
const productsData = productsDataRaw;

const Categories = () => {
  // Define 5 premium categories (Laptops removed)
  const premiumCategories = [
    {
      name: 'Gaming PCs',
      desc: 'Prebuilt ready-to-run desktop towers assembled for AAA gaming.',
      icon: Monitor,
      query: 'Gaming PCs',
      image: '/images/cat_pcs.png'
    },
    {
      name: 'Custom Builds',
      desc: 'Boutique hardline water-cooling systems and workflows.',
      icon: Wrench,
      query: 'Custom PCs',
      image: '/images/cat_custom.png'
    },
    {
      name: 'Graphics Cards',
      desc: 'NVIDIA RTX and AMD Radeon for next-gen raytracing.',
      icon: Layers,
      query: 'Graphics Cards',
      image: '/images/cat_gpus.png'
    },
    {
      name: 'Monitors',
      desc: 'QD-OLED, Mini-LED, and high-refresh gaming panels.',
      icon: Monitor,
      query: 'Gaming Monitors',
      image: '/images/cat_monitors.png'
    },
    {
      name: 'Accessories',
      desc: 'Mechanical keyboards, wireless mice, and headsets.',
      icon: Gamepad2,
      query: 'Accessories',
      image: '/images/cat_accessories.png'
    }
  ];

  const getProductCount = (query) => {
    return productsData.filter((p) => p.category.toLowerCase().includes(query.toLowerCase())).length;
  };

  const breadcrumbs = [{ name: 'Categories', url: '/categories' }];

  return (
    <>
      <SEOMetadata
        title="Premium Categories"
        description="Browse premium gaming PCs, custom loops, laptops, and hardware at ROG Store Pakistan."
        keywords="PC components Rawalpindi, Graphics cards Pakistan, Gaming gear Rawalpindi"
      />

      <div style={{ backgroundColor: 'transparent', width: '100%', minHeight: '100vh', paddingBottom: '80px' }}>
        <div className="container" style={{ padding: '32px 24px' }}>
          <Breadcrumbs paths={breadcrumbs} />

          <div style={{ maxWidth: '700px', marginBottom: '48px', marginTop: '24px' }}>
            <h1 style={{ fontSize: '42px', marginBottom: '16px', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
              Premium Categories
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Explore our curated selection of top-tier computing gear. From flagship GPUs to bespoke liquid-cooled setups.
            </p>
          </div>

          <div className="grid-cols-2 lg:grid-cols-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {premiumCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              const count = getProductCount(cat.query);

              return (
                <Link
                  key={idx}
                  to={`/shop?category=${encodeURIComponent(cat.query)}`}
                  style={{
                    position: 'relative',
                    borderRadius: 'var(--border-radius-lg)',
                    overflow: 'hidden',
                    height: '400px',
                    display: 'block',
                    textDecoration: 'none',
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-primary)',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease'
                  }}
                  className="category-lift-hover group"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                >
                  {/* Background Image */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }} 
                      className="group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0, bottom: 0,
                      background: 'linear-gradient(to top, rgba(17,24,39,0.95) 0%, rgba(17,24,39,0.4) 50%, rgba(255,255,255,0.05) 100%)'
                    }}></div>
                  </div>

                  {/* Content */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    padding: '32px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 2
                  }}>
                    <div className="flex-between" style={{ marginBottom: '16px' }}>
                      <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                        <IconComp size={24} />
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#fff', background: 'var(--accent-red)', padding: '6px 12px', borderRadius: '999px' }}>
                        {count} {count === 1 ? 'Item' : 'Items'}
                      </span>
                    </div>
                    
                    <h3 style={{ fontSize: '28px', color: '#fff', marginBottom: '8px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                      {cat.name}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: '24px' }}>
                      {cat.desc}
                    </p>
                    
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      Browse Collection <ChevronRight size={16} color="var(--accent-red)" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
