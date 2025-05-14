/**
 * Generates SEO configuration object for Astro-SEO
 * @param {Object} options - SEO options
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.path - Current page path
 * @param {Array} [options.additionalMeta=[]] - Additional meta tags
 * @param {string} [options.openGraph] - Open Graph image path
 * @param {boolean} [options.noindex=false] - Whether to noindex the page
 * @param {boolean} [options.nofollow=false] - Whether to nofollow the page
 * @returns {Object} SEO configuration object
 */
export function getSEOConfig({ 
    title, 
    description, 
    path, 
    additionalMeta = [],
    openGraph,
    noindex = false,
    nofollow = false
  }) {
    // Base URL for the site
    const siteUrl = import.meta.env.SITE || 'https://excelsa.cl';
    const canonicalURL = new URL(path, siteUrl).toString();
    
    return {
      title,
      description,
      canonical: canonicalURL,
      openGraph: {
        basic: {
          title,
          type: 'website',
          image: openGraph || '/assets/og-image.jpg', // Default OG image
          url: canonicalURL,
        },
        optional: {
          description,
          siteName: 'EXCELSA Calidad de Vida',
          locale: 'es_CL',
        },
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        image: openGraph || '/assets/og-image.jpg',
      },
      extend: {
        meta: [
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ...additionalMeta,
          ...(noindex ? [{ name: 'robots', content: 'noindex' }] : []),
          ...(nofollow ? [{ name: 'robots', content: 'nofollow' }] : []),
        ],
      },
    };
  }
  
  /**
   * Generates Schema.org JSON-LD for SEO
   * @param {string} type - Schema.org type
   * @param {Object} data - Schema data
   * @returns {Object} Formatted Schema.org object
   */
  export function generateSchema(type, data) {
    return {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };
  }
  
  /**
   * Helper to build breadcrumbs schema
   * @param {Array} items - Breadcrumb items with {name, item} props
   * @returns {Object} Breadcrumbs schema
   */
  export function generateBreadcrumbSchema(items) {
    return generateSchema('BreadcrumbList', {
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.item
      }))
    });
  }