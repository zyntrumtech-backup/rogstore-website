import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ paths = [] }) => {
  return (
    <nav aria-label="Breadcrumb" style={{ padding: '8px 0', marginBottom: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', fontSize: '12px', fontFamily: 'var(--font-display)', fontWeight: 500, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'inherit' }}
          className="hover-text-accent"
        >
          <Home style={{ width: '14px', height: '14px' }} />
          <span>Home</span>
        </Link>
        
        {paths.map((path, idx) => {
          const isLast = idx === paths.length - 1;
          
          return (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ChevronRight style={{ width: '12px', height: '12px', color: 'var(--text-muted)', flexShrink: 0 }} />
              {isLast ? (
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  {path.name}
                </span>
              ) : (
                <Link
                  to={path.url}
                  style={{ color: 'inherit' }}
                  className="hover-text-accent"
                >
                  {path.name}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
