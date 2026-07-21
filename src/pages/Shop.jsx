import { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, RotateCcw, X, Search, Check } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const modules = import.meta.glob('../data/products/*.json', { eager: true });
const productsDataRaw = Object.values(modules).map(module => module.default);

const productsData = productsDataRaw;
import Breadcrumbs from '../components/Breadcrumbs';
import LoadingSkeleton from '../components/LoadingSkeleton';
import SEOMetadata from '../components/SEOMetadata';

const Shop = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Parsing search params from URL
  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const urlCategory = queryParams.get('category') || '';
  const urlBrand = queryParams.get('brand') || '';
  const urlSearch = queryParams.get('search') || '';

  // State values
  const [search, setSearch] = useState(urlSearch);
  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [selectedBrand, setSelectedBrand] = useState(urlBrand);
  const [availabilityFilter, setAvailabilityFilter] = useState('all'); // all, in_stock, pre_order
  const [sortBy, setSortBy] = useState('featured'); // featured, name_az, name_za
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Sync state with URL params
  useEffect(() => {
    setSearch(urlSearch);
    setSelectedCategory(urlCategory);
    setSelectedBrand(urlBrand);
  }, [urlSearch, urlCategory, urlBrand]);

  // Extract list of all unique categories and brands for filter options
  const categories = useMemo(() => {
    const list = productsData.map((p) => p.category);
    return ['All', ...new Set(list)];
  }, []);

  const brands = useMemo(() => {
    const list = productsData.map((p) => p.brand);
    return ['All', ...new Set(list)];
  }, []);

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...productsData];

    // Category Filter
    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Brand Filter
    if (selectedBrand && selectedBrand !== 'All') {
      result = result.filter(
        (p) => p.brand.toLowerCase() === selectedBrand.toLowerCase()
      );
    }

    // Search Query Filter (Searches Name, Brand, Category, Specs, Model)
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((p) => {
        const nameMatch = p.name.toLowerCase().includes(q);
        const brandMatch = p.brand.toLowerCase().includes(q);
        const catMatch = p.category.toLowerCase().includes(q);
        const descMatch = p.description.toLowerCase().includes(q);
        const modelMatch = p.specs?.Model?.toLowerCase().includes(q) || false;
        
        // Spec key-value searches
        let specsMatch = false;
        if (p.specs) {
          specsMatch = Object.values(p.specs).some((val) =>
            String(val).toLowerCase().includes(q)
          );
        }

        return nameMatch || brandMatch || catMatch || descMatch || modelMatch || specsMatch;
      });
    }

    // Availability Filter
    if (availabilityFilter !== 'all') {
      result = result.filter((p) => p.availability === availabilityFilter);
    }

    // Sorting
    switch (sortBy) {
      case 'name_az':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name_za':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // 'featured' - default sequence
        break;
    }

    return result;
  }, [selectedCategory, selectedBrand, search, availabilityFilter, sortBy]);

  // Simulate loading state on filters changes for smoother feel
  const triggerLoading = () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  };

  const handleCategorySelect = (cat) => {
    triggerLoading();
    setSelectedCategory(cat);
    const params = new URLSearchParams(location.search);
    if (cat && cat !== 'All') {
      params.set('category', cat);
    } else {
      params.delete('category');
    }
    navigate(`/shop?${params.toString()}`);
  };

  const handleBrandSelect = (brand) => {
    triggerLoading();
    setSelectedBrand(brand);
    const params = new URLSearchParams(location.search);
    if (brand && brand !== 'All') {
      params.set('brand', brand);
    } else {
      params.delete('brand');
    }
    navigate(`/shop?${params.toString()}`);
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearch(val);
    const params = new URLSearchParams(location.search);
    if (val.trim()) {
      params.set('search', val.trim());
    } else {
      params.delete('search');
    }
    navigate(`/shop?${params.toString()}`);
  };

  const handleResetFilters = () => {
    triggerLoading();
    setSearch('');
    setSelectedCategory('All');
    setSelectedBrand('All');
    setAvailabilityFilter('all');
    setSortBy('featured');
    navigate('/shop');
  };

  // Breadcrumbs data
  const breadcrumbPaths = [{ name: 'Shop', url: '/shop' }];
  if (selectedCategory && selectedCategory !== 'All') {
    breadcrumbPaths.push({ name: selectedCategory, url: `/shop?category=${selectedCategory}` });
  }

  return (
    <>
      <SEOMetadata
        title={selectedCategory && selectedCategory !== 'All' ? `${selectedCategory} Catalog` : "Premium Computer Catalog"}
        description={`Browse our premium catalog of high performance computers, custom builds, graphics cards, motherboards, processors, and key components. Contact us to order.`}
        keywords="Computer components Rawalpindi, PC store Pakistan, Buy hardware Pakistan, ROG Store Shop"
      />

      <div className="container py-4 text-left">
        <Breadcrumbs paths={breadcrumbPaths} />

        <div className="shop-layout">
          
          {/* Sidebar Filter Panel - Desktop */}
          <aside className="shop-sidebar">
            <div className="glass-card p-6 border border-[var(--glass-border)] rounded-[var(--border-radius-md)] flex flex-col gap-6">
              
              {/* Header Title */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'bold', fontSize: '16px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <SlidersHorizontal style={{ width: '16px', height: '16px', color: 'var(--accent-red)' }} /> Filters
                </span>
                <button
                  onClick={handleResetFilters}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', fontFamily: 'var(--font-display)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
                  className="hover-text-accent"
                >
                  <RotateCcw style={{ width: '14px', height: '14px' }} /> Reset
                </button>
              </div>

              {/* Search input */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="form-label">Search Query</label>
                <div style={{ position: 'relative', width: '100%' }}>
                  <input
                    type="text"
                    placeholder="Search by keywords..."
                    value={search}
                    onChange={handleSearchChange}
                    className="form-input"
                    style={{ width: '100%', paddingRight: '40px' }}
                  />
                  <Search style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--text-muted)', pointerEvents: 'none' }} />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-col gap-2 text-left">
                <label className="form-label font-bold text-gray-800">Categories</label>
                <div className="flex flex-col max-h-[260px] overflow-y-auto pr-2 custom-scrollbar">
                  {categories.map((cat) => {
                    const isActive = (selectedCategory === cat || (cat === 'All' && !selectedCategory));
                    return (
                      <label key={cat} className={`filter-label ${isActive ? 'active' : ''}`}>
                        <input
                          type="checkbox"
                          className="filter-checkbox"
                          checked={isActive}
                          onChange={() => handleCategorySelect(cat)}
                        />
                        <span className="text-sm font-medium">{cat}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="flex flex-col gap-2 text-left">
                <label className="form-label font-bold text-gray-800">Brands</label>
                <div className="flex flex-col max-h-[260px] overflow-y-auto pr-2 custom-scrollbar">
                  {brands.map((brand) => {
                    const isActive = (selectedBrand === brand || (brand === 'All' && !selectedBrand));
                    return (
                      <label key={brand} className={`filter-label ${isActive ? 'active' : ''}`}>
                        <input
                          type="checkbox"
                          className="filter-checkbox"
                          checked={isActive}
                          onChange={() => handleBrandSelect(brand)}
                        />
                        <span className="text-sm font-medium">{brand}</span>
                      </label>
                    );
                  })}
                </div>
              </div>



              {/* Availability Filter */}
              <div className="flex flex-col gap-2">
                <label className="form-label">Availability</label>
                <div className="grid grid-cols-3 gap-1 bg-[var(--bg-tertiary)] p-1 rounded border border-[var(--border-color)]">
                  {['all', 'in_stock', 'pre_order'].map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setAvailabilityFilter(status);
                        triggerLoading();
                      }}
                      className={`text-[10px] py-1.5 rounded uppercase font-display font-bold transition-all ${
                        availabilityFilter === status
                          ? 'bg-[var(--accent-red)] text-white'
                          : 'text-[var(--text-secondary)] hover:text-white'
                      }`}
                    >
                      {status === 'in_stock' ? 'In Stock' : status === 'pre_order' ? 'Preorder' : 'All'}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Catalog Grid Area */}
          <main className="shop-main">
            {/* Header controls toolbar */}
            <div className="glass-card p-4 border border-[var(--glass-border)] rounded-[var(--border-radius-md)] shop-toolbar">
              <span className="text-sm font-display text-[var(--text-secondary)]">
                Showing{' '}
                <strong className="text-[var(--text-charcoal)] font-bold">
                  {filteredProducts.length}
                </strong>{' '}
                products
              </span>

              <div className="shop-toolbar-actions">
                {/* Sort Option Selection */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="sort-label">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value);
                      triggerLoading();
                    }}
                    className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg text-sm font-medium text-[var(--text-primary)] py-2 px-3 focus:outline-none focus:border-[var(--accent-red)] cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="name_az">Name: A to Z</option>
                    <option value="name_za">Name: Z to A</option>
                  </select>
                </div>

                {/* Mobile Filter toggle button */}
                <button
                  onClick={() => setIsMobileFiltersOpen(true)}
                  className="mobile-filter-btn"
                >
                  <SlidersHorizontal style={{ width: '16px', height: '16px' }} /> Filters
                </button>
              </div>
            </div>

            {/* List Grid cards */}
            {isLoading ? (
              <LoadingSkeleton type="card" count={6} />
            ) : filteredProducts.length > 0 ? (
              <motion.div layout className="product-grid">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="glass-card py-16 px-6 text-center border border-[var(--glass-border)] rounded-[var(--border-radius-md)] flex flex-col items-center justify-center">
                <SlidersHorizontal className="w-10 h-10 text-[var(--text-muted)] mb-4" />
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  No Products Found
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-6 max-w-sm">
                  We couldn't find any products matching your active filter criteria. Try resetting or adjusting filters.
                </p>
                <button onClick={handleResetFilters} className="btn btn-primary text-xs">
                  Reset All Filters
                </button>
              </div>
            )}
          </main>
          
        </div>
      </div>

      {/* Mobile Filters Drawer Overlay */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFiltersOpen(false)}
              className="fixed inset-0 bg-black z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[300px] max-w-full bg-[var(--bg-secondary)] border-l border-[var(--border-color)] z-50 p-6 overflow-y-auto flex flex-col gap-6 text-left lg:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)]">
                <span className="font-display font-bold text-base text-white flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[var(--accent-red)]" /> Filters
                </span>
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="p-1 text-[var(--text-muted)] hover:text-white"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile reset */}
              <button
                onClick={() => {
                  handleResetFilters();
                  setIsMobileFiltersOpen(false);
                }}
                className="w-full btn btn-secondary text-xs py-2 flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
              </button>

              {/* Mobile Search */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="form-label">Search Query</label>
                <div style={{ position: 'relative', width: '100%' }}>
                  <input
                    type="text"
                    placeholder="Search by keywords..."
                    value={search}
                    onChange={handleSearchChange}
                    className="form-input"
                    style={{ width: '100%', paddingRight: '40px' }}
                  />
                  <Search style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--text-muted)', pointerEvents: 'none' }} />
                </div>
              </div>

              {/* Mobile Categories */}
              <div className="flex flex-col gap-2">
                <label className="form-label">Categories</label>
                <div className="flex flex-col gap-1 max-h-[160px] overflow-y-auto pr-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className={`text-xs text-left py-1.5 px-2 rounded flex items-center justify-between ${
                        (selectedCategory === cat || (cat === 'All' && !selectedCategory))
                          ? 'bg-[var(--accent-red-alpha)] text-[var(--accent-red)] font-semibold'
                          : 'text-[var(--text-secondary)] hover:bg-[rgba(255,255,255,0.02)] hover:text-white'
                      }`}
                    >
                      <span>{cat}</span>
                      {(selectedCategory === cat || (cat === 'All' && !selectedCategory)) && (
                        <Check className="w-3.5 h-3.5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Brands */}
              <div className="flex flex-col gap-2">
                <label className="form-label">Brands</label>
                <div className="flex flex-col gap-1 max-h-[160px] overflow-y-auto pr-1">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => handleBrandSelect(brand)}
                      className={`text-xs text-left py-1.5 px-2 rounded flex items-center justify-between ${
                        (selectedBrand === brand || (brand === 'All' && !selectedBrand))
                          ? 'bg-[var(--accent-red-alpha)] text-[var(--accent-red)] font-semibold'
                          : 'text-[var(--text-secondary)] hover:bg-[rgba(255,255,255,0.02)] hover:text-white'
                      }`}
                    >
                      <span>{brand}</span>
                      {(selectedBrand === brand || (brand === 'All' && !selectedBrand)) && (
                        <Check className="w-3.5 h-3.5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>



              {/* Mobile Availability */}
              <div className="flex flex-col gap-2">
                <label className="form-label">Availability</label>
                <div className="grid grid-cols-3 gap-1 bg-[var(--bg-tertiary)] p-1 rounded border border-[var(--border-color)]">
                  {['all', 'in_stock', 'pre_order'].map((status) => (
                    <button
                      key={status}
                      onClick={() => setAvailabilityFilter(status)}
                      className={`text-[9px] py-1.5 rounded uppercase font-display font-bold transition-all ${
                        availabilityFilter === status
                          ? 'bg-[var(--accent-red)] text-white'
                          : 'text-[var(--text-secondary)] hover:text-white'
                      }`}
                    >
                      {status === 'in_stock' ? 'In Stock' : status === 'pre_order' ? 'Preorder' : 'All'}
                    </button>
                  ))}
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Shop;
