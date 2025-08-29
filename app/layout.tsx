import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import ThemeProvider from '../app/providers/ThemeProvider';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mindsthetics | #1 Aesthetic Clinic in Lahore, Pakistan - Premium Cosmetology & Beauty Treatments",
  description: "Pakistan's leading aesthetic clinic in Lahore offering premium cosmetology services, skin treatments, laser hair removal, and beauty procedures. Over 5000+ happy clients. FDA/CE approved treatments. Book your free consultation today!",
  keywords: [
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
  authors: [{ name: "Mindsthetics", url: "https://mindsthetics.com" }],
  creator: "Mindsthetics",
  publisher: "Mindsthetics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mindsthetics.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mindsthetics.com',
    siteName: 'Mindsthetics',
    title: 'Mindsthetics | #1 Aesthetic Clinic in Lahore, Pakistan - Premium Cosmetology & Beauty Treatments',
    description: 'Pakistan\'s leading aesthetic clinic in Lahore offering premium cosmetology services, skin treatments, laser hair removal, and beauty procedures. Over 5000+ happy clients. FDA/CE approved treatments.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mindsthetics - Premium Aesthetic Clinic in Lahore, Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mindsthetics | #1 Aesthetic Clinic in Lahore, Pakistan',
    description: 'Pakistan\'s leading aesthetic clinic offering premium cosmetology services, skin treatments, and beauty procedures. Over 5000+ happy clients.',
    images: ['/twitter-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Health & Beauty',
  classification: 'Medical & Health',
  other: {
    'geo.region': 'PK-PB',
    'geo.placename': 'Lahore',
    'geo.position': '31.5204;74.3587',
    'ICBM': '31.5204, 74.3587',
    'DC.title': 'Mindsthetics - Premium Aesthetic Clinic in Lahore, Pakistan',
    'DC.creator': 'Mindsthetics',
    'DC.subject': 'Aesthetic Clinic, Cosmetology, Beauty Treatments, Lahore, Pakistan',
    'DC.description': 'Pakistan\'s leading aesthetic clinic in Lahore offering premium cosmetology services',
    'DC.publisher': 'Mindsthetics',
    'DC.contributor': 'Mindsthetics Team',
    'DC.date': '2024',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': 'https://mindsthetics.com',
    'DC.language': 'en',
    'DC.coverage': 'Lahore, Pakistan',
    'DC.rights': 'Copyright 2024 Mindsthetics',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Mindsthetics",
              "alternateName": "Mindsthetics Aesthetic Clinic",
              "description": "Pakistan's leading aesthetic clinic in Lahore offering premium cosmetology services, skin treatments, laser hair removal, and beauty procedures.",
              "url": "https://mindsthetics.com",
              "logo": "https://mindsthetics.com/logo.png",
              "image": "https://mindsthetics.com/clinic-image.jpg",
              "telephone": "+92-311-111-7546",
              "email": "info@mindsthetics.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lahore, Pakistan",
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
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Aesthetic Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "HydraFacial Treatment",
                      "description": "12-step facial treatment for skin rejuvenation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Laser Hair Removal",
                      "description": "Permanent hair removal using advanced laser technology"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "7D HIFU Face Sculpting",
                      "description": "Non-surgical face lifting and contouring"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Body Contouring",
                      "description": "Non-surgical body sculpting treatments"
                    }
                  }
                ]
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
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Client Review"
                },
                "reviewBody": "Excellent service and professional staff. Highly recommended aesthetic clinic in Lahore."
              },
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
            })
          }}
        />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mindsthetics",
              "url": "https://mindsthetics.com",
              "logo": "https://mindsthetics.com/logo.png",
              "description": "Pakistan's leading aesthetic clinic in Lahore offering premium cosmetology services",
              "foundingDate": "2020",
              "numberOfEmployees": "50+",
              "award": [
                "Pakistan's Leading Aesthetic Chain",
                "No.1 Aesthetics Brand in Lahore",
                "FDA/CE Approved Treatments"
              ],
              "knowsAbout": [
                "Aesthetic Cosmetology",
                "Skin Treatments",
                "Laser Hair Removal",
                "Anti-Aging Procedures",
                "Beauty Treatments"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-311-111-7546",
                "contactType": "customer service",
                "areaServed": "PK",
                "availableLanguage": ["English", "Urdu"]
              }
            })
          }}
        />

        {/* Structured Data for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the best aesthetic clinic in Lahore?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mindsthetics is recognized as the #1 aesthetic clinic in Lahore, Pakistan, offering premium cosmetology services with over 5000+ happy clients and FDA/CE approved treatments."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What aesthetic treatments are available in Lahore?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mindsthetics offers comprehensive aesthetic treatments including HydraFacial, Laser Hair Removal, 7D HIFU Face Sculpting, Body Contouring, Skin Rejuvenation, and Anti-Aging procedures."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are aesthetic treatments safe in Pakistan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Mindsthetics uses FDA/CE approved equipment and procedures, ensuring the highest safety standards for all aesthetic treatments in Pakistan."
                  }
                }
              ]
            })
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Local SEO Meta Tags */}
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lahore" />
        <meta name="geo.position" content="31.5204;74.3587" />
        <meta name="ICBM" content="31.5204, 74.3587" />
        
        {/* Business Hours */}
        <meta name="business:contact_data:street_address" content="Lahore, Pakistan" />
        <meta name="business:contact_data:locality" content="Lahore" />
        <meta name="business:contact_data:region" content="Punjab" />
        <meta name="business:contact_data:postal_code" content="54000" />
        <meta name="business:contact_data:country_name" content="Pakistan" />
        <meta name="business:contact_data:phone_number" content="+92-311-111-7546" />
        <meta name="business:contact_data:email" content="info@mindsthetics.com" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/bebas-neue.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#2A4E4E" />
        <meta name="msapplication-TileColor" content="#2A4E4E" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${inter.variable} ${bebasNeue.variable} antialiased`}
        style={{ margin: 0, padding: 0 }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
