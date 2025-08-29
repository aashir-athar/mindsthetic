import React from 'react';
import { Metadata } from 'next';
import HomePage from './components/HomePage';

// Page-specific metadata for SEO
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
  openGraph: {
    title: 'Mindsthetics | #1 Aesthetic Clinic in Lahore, Pakistan - Premium Cosmetology & Beauty Treatments',
    description: 'Pakistan\'s leading aesthetic clinic in Lahore offering premium cosmetology services, skin treatments, laser hair removal, and beauty procedures. Over 5000+ happy clients. FDA/CE approved treatments.',
    url: 'https://mindsthetics.com',
    siteName: 'Mindsthetics',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mindsthetics - Premium Aesthetic Clinic in Lahore, Pakistan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mindsthetics | #1 Aesthetic Clinic in Lahore, Pakistan',
    description: 'Pakistan\'s leading aesthetic clinic offering premium cosmetology services, skin treatments, and beauty procedures. Over 5000+ happy clients.',
    images: ['/twitter-image.jpg'],
    creator: '@mindsthetics',
    site: '@mindsthetics',
  },
  alternates: {
    canonical: 'https://mindsthetics.com',
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
    'geo.region': 'PK-PB',
    'geo.placename': 'Lahore',
    'geo.position': '31.5204;74.3587',
    'ICBM': '31.5204, 74.3587',
  },
};

export default function Home() {
  return <HomePage />;
}
