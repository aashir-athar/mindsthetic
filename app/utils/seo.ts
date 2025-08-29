import { Metadata } from 'next';

// SEO configuration constants
export const SEO_CONFIG = {
  SITE_NAME: 'Mindsthetics',
  SITE_URL: 'https://mindsthetics.com',
  SITE_DESCRIPTION: "Pakistan's leading aesthetic clinic in Lahore offering premium cosmetology services, skin treatments, laser hair removal, and beauty procedures. Over 5000+ happy clients. FDA/CE approved treatments.",
  SITE_KEYWORDS: [
    "aesthetic clinic in Lahore",
    "aesthetic clinic in Pakistan", 
    "best aesthetic clinic Lahore",
    "premium cosmetology clinic Pakistan",
    "skin treatment clinic Lahore",
    "laser hair removal Lahore",
    "beauty clinic Pakistan",
    "dermatology clinic Lahore",
    "cosmetic procedures Pakistan",
    "anti-aging treatments Lahore",
    "HydraFacial Pakistan",
    "7D HIFU Lahore",
    "face sculpting Pakistan",
    "body contouring Lahore",
    "skin rejuvenation Pakistan",
    "hair fall treatment Lahore",
    "men's aesthetic treatments Pakistan",
    "FDA approved treatments Lahore",
    "no downtime procedures Pakistan",
    "celebrity aesthetic clinic Lahore"
  ],
  GEO_LOCATION: {
    region: 'PK-PB',
    placename: 'Lahore',
    position: '31.5204;74.3587',
    ICBM: '31.5204, 74.3587'
  },
  CONTACT: {
    phone: '+92-325-420-0025',
    email: 'info@mindsthetics.com',
    address: 'Lahore, Pakistan'
  }
};

// Generate metadata for different page types
export function generatePageMetadata(
  title: string,
  description: string,
  path: string = '',
  keywords: string[] = [],
  image: string = '/og-image.jpg'
): Metadata {
  const fullTitle = `${title} | ${SEO_CONFIG.SITE_NAME}`;
  const fullDescription = description || SEO_CONFIG.SITE_DESCRIPTION;
  const fullKeywords = [...SEO_CONFIG.SITE_KEYWORDS, ...keywords];
  const fullUrl = `${SEO_CONFIG.SITE_URL}${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    authors: [{ name: SEO_CONFIG.SITE_NAME, url: SEO_CONFIG.SITE_URL }],
    creator: SEO_CONFIG.SITE_NAME,
    publisher: SEO_CONFIG.SITE_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SEO_CONFIG.SITE_URL),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: fullUrl,
      siteName: SEO_CONFIG.SITE_NAME,
      title: fullTitle,
      description: fullDescription,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${fullTitle} - ${SEO_CONFIG.SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [image],
      creator: '@mindsthetics',
      site: '@mindsthetics',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'geo.region': SEO_CONFIG.GEO_LOCATION.region,
      'geo.placename': SEO_CONFIG.GEO_LOCATION.placename,
      'geo.position': SEO_CONFIG.GEO_LOCATION.position,
      'ICBM': SEO_CONFIG.GEO_LOCATION.ICBM,
    },
  };
}

// Generate structured data for different content types
export function generateLocalBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": SEO_CONFIG.SITE_NAME,
    "alternateName": `${SEO_CONFIG.SITE_NAME} Aesthetic Clinic`,
    "description": SEO_CONFIG.SITE_DESCRIPTION,
    "url": SEO_CONFIG.SITE_URL,
    "logo": `${SEO_CONFIG.SITE_URL}/logo.png`,
    "image": `${SEO_CONFIG.SITE_URL}/clinic-image.jpg`,
    "telephone": SEO_CONFIG.CONTACT.phone,
    "email": SEO_CONFIG.CONTACT.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SEO_CONFIG.CONTACT.address,
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "addressCountry": "PK",
      "postalCode": "54000"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.5204,
      "longitude": 74.3587
    },
    "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-16:00",
    "priceRange": "$$",
    "currenciesAccepted": "PKR, USD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": {
      "@type": "City",
      "name": "Lahore"
    },
    "serviceArea": {
      "@type": "City",
      "name": "Lahore"
    },
    "medicalSpecialty": "Cosmetology",
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Skin Treatments",
        "description": "Advanced skin care and rejuvenation procedures"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Hair Removal",
        "description": "Laser and permanent hair removal services"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Anti-Aging Treatments",
        "description": "Non-surgical anti-aging and rejuvenation procedures"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "5000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/mindsthetics",
      "https://www.instagram.com/mindsthetics",
      "https://www.youtube.com/mindsthetics"
    ]
  };
}

export function generateServiceStructuredData(serviceName: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "url": url,
    "provider": {
      "@type": "MedicalBusiness",
      "name": SEO_CONFIG.SITE_NAME,
      "url": SEO_CONFIG.SITE_URL
    },
    "areaServed": {
      "@type": "City",
      "name": "Lahore"
    },
    "serviceType": "Aesthetic Treatment"
  };
}

export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}

// Generate meta tags for different social platforms
export function generateSocialMetaTags(title: string, description: string, image: string = '/og-image.jpg') {
  return {
    // Open Graph
    'og:title': title,
    'og:description': description,
    'og:image': `${SEO_CONFIG.SITE_URL}${image}`,
    'og:url': SEO_CONFIG.SITE_URL,
    'og:type': 'website',
    'og:site_name': SEO_CONFIG.SITE_NAME,
    'og:locale': 'en_US',
    
    // Twitter
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': `${SEO_CONFIG.SITE_URL}${image}`,
    'twitter:creator': '@mindsthetics',
    'twitter:site': '@mindsthetics',
    
    // Additional
    'twitter:label1': 'Est. reading time',
    'twitter:data1': '3 minutes'
  };
}

// Generate local SEO meta tags
export function generateLocalSEOMetaTags() {
  return {
    'geo.region': SEO_CONFIG.GEO_LOCATION.region,
    'geo.placename': SEO_CONFIG.GEO_LOCATION.placename,
    'geo.position': SEO_CONFIG.GEO_LOCATION.position,
    'ICBM': SEO_CONFIG.GEO_LOCATION.ICBM,
    'business:contact_data:street_address': SEO_CONFIG.CONTACT.address,
    'business:contact_data:locality': 'Lahore',
    'business:contact_data:region': 'Punjab',
    'business:contact_data:postal_code': '54000',
    'business:contact_data:country_name': 'Pakistan',
    'business:contact_data:phone_number': SEO_CONFIG.CONTACT.phone,
    'business:contact_data:email': SEO_CONFIG.CONTACT.email
  };
}

// Utility function to clean and format text for SEO
export function formatTextForSEO(text: string): string {
  return text
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
}

// Generate URL-friendly slugs
export function generateSlug(text: string): string {
  return formatTextForSEO(text);
}

// Validate and clean meta description
export function validateMetaDescription(description: string): string {
  const maxLength = 160;
  if (description.length <= maxLength) {
    return description;
  }
  return description.substring(0, maxLength - 3) + '...';
}

// Generate keywords for specific services
export function generateServiceKeywords(serviceName: string): string[] {
  const baseKeywords = SEO_CONFIG.SITE_KEYWORDS;
  const serviceKeywords = [
    `${serviceName} Lahore`,
    `${serviceName} Pakistan`,
    `best ${serviceName} clinic Lahore`,
    `${serviceName} treatment Pakistan`,
    `${serviceName} cost Lahore`,
    `${serviceName} price Pakistan`
  ];
  
  return [...baseKeywords, ...serviceKeywords];
}
