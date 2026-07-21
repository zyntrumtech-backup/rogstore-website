import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const ProductCard = ({ product }) => {
  const { id, name, brand, category, price, availability, specs } = product;


  // Availability badge styling
  const getAvailabilityInfo = (status) => {
    switch (status) {
      case 'in_stock':
        return { text: 'In Stock', color: '#059669', bg: '#D1FAE5', border: '#34D399' };
      case 'out_of_stock':
        return { text: 'Out of Stock', color: '#DC2626', bg: '#FEE2E2', border: '#F87171' };
      case 'pre_order':
        return { text: 'Pre-Order', color: '#D97706', bg: '#FEF3C7', border: '#FBBF24' };
      default:
        return { text: 'Inquire', color: '#4B5563', bg: '#F3F4F6', border: '#D1D5DB' };
    }
  };

  const badge = getAvailabilityInfo(availability);

  // Generate pre-filled WhatsApp message URL
  const getWhatsAppLink = () => {
    const defaultNum = '923471100056';
    const textMessage = `Hello ROG Store, I'm interested in:

*${brand} - ${name}*

Please let me know if this is currently available.`;
    
    return `https://wa.me/${defaultNum}?text=${encodeURIComponent(textMessage)}`;
  };

  // Get a key spec to display on card
  const getCardSpec = () => {
    if (!specs) return '';
    const keySpecKeys = ['Processor', 'CPU', 'GPU', 'Capacity', 'PanelSize', 'Layout', 'Wattage', 'Type'];
    for (const key of keySpecKeys) {
      if (specs[key]) {
        return `${key}: ${specs[key]}`;
      }
    }
    return specs.Model ? `Model: ${specs.Model}` : '';
  };

  const specLabel = getCardSpec();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="rgb-glow-hover"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderRadius: 'var(--border-radius-lg)',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Link to={`/product/${id}`} style={{ position: 'relative', display: 'block', backgroundColor: 'var(--bg-secondary)', padding: '24px' }} className="product-image-container group">
        <img
          src={product.image || 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80'}
          alt={name}
          loading="lazy"
          style={{ width: '100%', height: '240px', objectFit: 'contain', mixBlendMode: 'multiply', transition: 'transform 0.5s ease' }}
          className="group-hover:scale-105"
        />
        
        {/* Badges */}
        <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '8px', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '11px', fontWeight: 'bold', color: badge.color, backgroundColor: badge.bg, border: `1px solid ${badge.border}`, padding: '4px 10px', borderRadius: '6px', display: 'inline-block' }}>
            {badge.text}
          </span>
          <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--text-secondary)', backgroundColor: 'var(--bg-primary)', padding: '4px 10px', borderRadius: '6px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <ShieldCheck size={12} className="text-[var(--text-secondary)]" /> Official Warranty
          </span>
        </div>
      </Link>

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--accent-red)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
          {brand}
        </span>
        
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          <Link to={`/product/${id}`} style={{ color: 'inherit' }}>{name}</Link>
        </h3>

        {specLabel && (
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            {specLabel}
          </p>
        )}

        <div style={{ marginTop: 'auto', marginBottom: '24px' }}>
          <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--accent-red)' }}>
            Inquire for Price
          </span>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <Link to={`/product/${id}`} className="btn" style={{ flex: 1, backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
            Details
          </Link>
          <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="btn" style={{ flex: 1, background: 'var(--gradient-accent)', color: '#fff', boxShadow: '0 4px 12px rgba(229, 57, 53, 0.3)', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
            <WhatsAppIcon size={16} /> Inquire
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
