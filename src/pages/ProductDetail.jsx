import { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MessageSquare, ShieldCheck, Truck, RotateCcw, AlertTriangle, ArrowLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const modules = import.meta.glob('../data/products/*.json', { eager: true });
const productsDataRaw = Object.values(modules).map(module => module.default);
import Breadcrumbs from '../components/Breadcrumbs';
import SEOMetadata from '../components/SEOMetadata';
import WhatsAppIcon from '../components/WhatsAppIcon';

const productsData = productsDataRaw;

const ProductDetail = () => {
  const { id } = useParams();

  // Scroll to top on page load/change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Lookup product in database
  const product = useMemo(() => {
    return productsData.find((p) => p.id === id);
  }, [id]);

  // Related products (from same category, excluding current product, limit to 4)
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return productsData
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  // If product not found
  if (!product) {
    return (
      <div className="container flex-center" style={{ flexDirection: 'column', padding: '96px 0', textAlign: 'center' }}>
        <AlertTriangle size={48} style={{ color: 'var(--accent-red)', marginBottom: '16px' }} />
        <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Product Not Found</h2>
        <p style={{ marginBottom: '24px', maxWidth: '400px' }}>
          The product you are trying to view does not exist in our catalog or has been moved.
        </p>
        <Link to="/shop" className="btn btn-primary" style={{ fontSize: '12px' }}>
          <ArrowLeft size={16} /> Back to Shop
        </Link>
      </div>
    );
  }

  const { name, brand, category, price, availability, warranty, specs, description, highlights, image } = product;

  // Formatting utilities
  const formatPrice = (val) => {
    if (val === undefined || val === null) return 'Call for Price';
    return `Rs. ${val.toLocaleString('en-PK')}`;
  };

  const getAvailabilityText = (status) => {
    switch (status) {
      case 'in_stock': return 'In Stock';
      case 'out_of_stock': return 'Out of Stock';
      case 'pre_order': return 'Pre-Order Available';
      default: return 'Inquire for Stock';
    }
  };

  const getAvailabilityClass = (status) => {
    switch (status) {
      case 'in_stock': return 'badge-in-stock';
      case 'out_of_stock': return 'badge-out-of-stock';
      case 'pre_order': return 'badge-pre-order';
      default: return 'badge-inquire';
    }
  };

  // Generate WhatsApp Message
  const getWhatsAppLink = () => {
    const defaultNum = '923471100056';
    const textMsg = `Hello ROG Store, I found your website and I would like to place an order/inquire for this product:

*${brand} - ${name}*
Category: ${category}
Availability: ${getAvailabilityText(availability)}
Warranty: ${warranty}

Please let me know the pricing, payment and delivery procedure. Thanks!`;
    return `https://wa.me/${defaultNum}?text=${encodeURIComponent(textMsg)}`;
  };

  // Breadcrumb path configuration
  const breadcrumbPaths = [
    { name: 'Shop', url: '/shop' },
    { name: category, url: `/shop?category=${encodeURIComponent(category)}` },
    { name: name, url: `/product/${id}` }
  ];

  return (
    <>
      <SEOMetadata
        title={`${name} - ${brand}`}
        description={`${description.slice(0, 150)}... Sourced by ROG Store, Midway Center, Rawalpindi.`}
        keywords={`${name}, ${brand} Rawalpindi, Buy ${name} Pakistan, Gaming components Pakistan`}
      />

      <div className="container" style={{ padding: '16px 24px' }}>
        <Breadcrumbs paths={breadcrumbPaths} />

        <div className="grid-cols-2" style={{ marginTop: '32px', alignItems: 'flex-start', gap: '48px' }}>
          
          {/* Left Column - Large Image Visual Gallery */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="hero-image-wrapper glass-card">
              <img
                src={image || 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80'}
                alt={name}
                className="hero-image"
              />
            </div>
            
            <div className="grid-cols-4" style={{ gap: '16px' }}>
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="hero-image-wrapper glass-card"
                  style={{ cursor: 'pointer', aspectRatio: '4/3' }}
                >
                  <img
                    src={image || 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80'}
                    alt={`Thumbnail ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                    onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                    onMouseOut={(e) => e.currentTarget.style.opacity = 0.7}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Meta Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Header info */}
            <div>
              <span style={{ fontSize: '14px', fontFamily: 'var(--font-display)', fontWeight: 600, textTransform: 'uppercase', color: 'var(--accent-red)', marginBottom: '4px', display: 'block' }}>
                {brand}
              </span>
              <h1 style={{ fontSize: '32px', marginBottom: '12px' }}>
                {name}
              </h1>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginTop: '16px' }}>
                <span className={`product-badge ${getAvailabilityClass(availability)}`} style={{ position: 'relative', top: 0, left: 0 }}>
                  {getAvailabilityText(availability)}
                </span>
                
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', padding: '4px 12px', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={14} color="var(--accent-red)" /> {warranty}
                </span>
              </div>
            </div>

            {/* Price section (Removed prices as requested, replaced with Inquire CTA) */}
            <div style={{ padding: '24px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Pricing Info</span>
              <span style={{ fontSize: '28px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--accent-red)' }}>
                Inquire for Price
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                *Prices are subject to market fluctuations. Please contact us to get the latest quote.
              </span>
            </div>

            {/* Product description */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h3 style={{ fontSize: '14px', textTransform: 'uppercase' }}>
                Product Description
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
                {description}
              </p>
            </div>

            {/* Action CTA Buttons */}
            <div className="grid-cols-2" style={{ gap: '16px', marginTop: '8px' }}>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}
              >
                <WhatsAppIcon size={20} /> Inquire via WhatsApp
              </a>
              <a
                href="tel:03471100056"
                className="btn btn-secondary"
                style={{ width: '100%', fontSize: '14px' }}
              >
                Call Store
              </a>
            </div>

            {/* Store Trust Badges */}
            <div className="grid-cols-3" style={{ paddingTop: '24px', borderTop: '1px solid var(--border-color)', marginTop: '8px' }}>
              <div className="flex-center" style={{ flexDirection: 'column', padding: '12px', borderRadius: '8px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                <ShieldCheck size={20} color="var(--accent-red)" style={{ marginBottom: '8px' }} />
                <span style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>100% Genuine</span>
              </div>
              <div className="flex-center" style={{ flexDirection: 'column', padding: '12px', borderRadius: '8px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                <Truck size={20} color="var(--accent-red)" style={{ marginBottom: '8px' }} />
                <span style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>Secure Delivery</span>
              </div>
              <div className="flex-center" style={{ flexDirection: 'column', padding: '12px', borderRadius: '8px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                <RotateCcw size={20} color="var(--accent-red)" style={{ marginBottom: '8px' }} />
                <span style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>Easy Exchange</span>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Specifications Sheet */}
        {specs && Object.keys(specs).length > 0 && (
          <section style={{ marginTop: '64px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              Technical Specifications
            </h2>
            <div className="glass-card" style={{ overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                <tbody>
                  {Object.entries(specs).map(([key, val], index) => (
                    <tr
                      key={key}
                      style={{ background: index % 2 === 0 ? 'var(--bg-secondary)' : 'transparent' }}
                    >
                      <td style={{ padding: '16px 24px', fontWeight: 'bold', width: '33%', borderBottom: '1px solid var(--border-color)' }}>
                        {key}
                      </td>
                      <td style={{ padding: '16px 24px', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-color)' }}>
                        {String(val)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Highlights Bullets */}
        {highlights && highlights.length > 0 && (
          <section style={{ marginTop: '64px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              Key Highlights
            </h2>
            <ul className="grid-cols-2" style={{ listStyle: 'none' }}>
              {highlights.map((highlight, i) => (
                <li
                  key={i}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', fontSize: '14px' }}
                >
                  <ShieldCheck size={20} color="var(--accent-red)" style={{ flexShrink: 0 }} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Suggested Related Products Section */}
        {relatedProducts.length > 0 && (
          <section style={{ marginTop: '80px', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '32px' }}>
              Suggested Products
            </h2>
            <div className="product-grid">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

      </div>
    </>
  );
};

export default ProductDetail;
