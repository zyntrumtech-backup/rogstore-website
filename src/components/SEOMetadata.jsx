import { useEffect } from 'react';

const SEOMetadata = ({
  title,
  description,
  keywords,
  canonicalUrl = 'https://rogstore.pk/',
  schemaType = 'LocalBusiness',
  schemaData = null
}) => {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = `${title} | ROG Store`;
    }

    // 2. Update Meta Tags
    const updateMetaTag = (name, value, attribute = 'name') => {
      if (!value) return;
      let el = document.querySelector(`meta[${attribute}="${name}"]`);
      if (el) {
        el.setAttribute('content', value);
      } else {
        el = document.createElement('meta');
        el.setAttribute(attribute, name);
        el.setAttribute('content', value);
        document.head.appendChild(el);
      }
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph
    updateMetaTag('og:title', `${title} | ROG Store`, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');

    // Twitter
    updateMetaTag('twitter:title', `${title} | ROG Store`, 'property');
    updateMetaTag('twitter:description', description, 'property');

    // 3. Update Canonical Link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) {
      canonicalEl.setAttribute('href', canonicalUrl);
    } else {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      canonicalEl.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonicalEl);
    }

    // 4. Inject JSON-LD Schema
    const scriptId = 'rogstore-jsonld-schema';
    let scriptEl = document.getElementById(scriptId);
    if (scriptEl) {
      scriptEl.remove();
    }

    // Base Schema (LocalBusiness by default if no product/breadcrumbs data)
    let finalSchema = null;

    if (schemaType === 'LocalBusiness') {
      finalSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "ROG Store",
        "image": "https://rogstore.pk/images/hero_setup.png",
        "telephone": "0347-1100056",
        "url": "https://rogstore.pk/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Midway Center",
          "addressLocality": "Rawalpindi",
          "addressRegion": "Punjab",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "33.6007",
          "longitude": "73.0679"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "11:00",
            "closes": "21:00"
          }
        ],
        "priceRange": "$$"
      };
    } else if (schemaData) {
      finalSchema = schemaData;
    }

    if (finalSchema) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      scriptEl.innerHTML = JSON.stringify(finalSchema);
      document.head.appendChild(scriptEl);
    }

    // Cleanup schema script on unmount
    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [title, description, keywords, canonicalUrl, schemaType, schemaData]);

  return null;
};

export default SEOMetadata;
