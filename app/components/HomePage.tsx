'use client';

import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import PromotionsSection from './PromotionsSection';
import ServicesSection from './ServicesSection';
import SpecialistsSection from './SpecialistsSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default function HomePage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
    return (
        <>
            {/* Additional structured data for the homepage */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Mindsthetics - Premium Aesthetic Clinic in Lahore, Pakistan",
                        "description": "Pakistan's leading aesthetic clinic in Lahore offering premium cosmetology services, skin treatments, laser hair removal, and beauty procedures.",
                        "url": "https://mindsthetics.com",
                        "mainEntity": {
                            "@type": "MedicalBusiness",
                            "name": "Mindsthetics",
                            "description": "Pakistan's leading aesthetic clinic in Lahore offering premium cosmetology services",
                            "url": "https://mindsthetics.com",
                            "telephone": "+92-311-111-7546",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Lahore",
                                "addressRegion": "Punjab",
                                "addressCountry": "PK"
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
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://mindsthetics.com"
                                }
                            ]
                        },
                        "potentialAction": [
                            {
                                "@type": "SearchAction",
                                "target": {
                                    "@type": "EntryPoint",
                                    "urlTemplate": "https://mindsthetics.com/search?q={search_term_string}"
                                },
                                "query-input": "required name=search_term_string"
                            },
                            {
                                "@type": "ReserveAction",
                                "target": {
                                    "@type": "EntryPoint",
                                    "urlTemplate": "https://mindsthetics.com/book-consultation"
                                }
                            }
                        ]
                    })
                }}
            />

            {/* Breadcrumb structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://mindsthetics.com"
                            }
                        ]
                    })
                }}
            />

            {/* WebSite structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Mindsthetics",
                        "url": "https://mindsthetics.com",
                        "description": "Pakistan's leading aesthetic clinic in Lahore offering premium cosmetology services",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": {
                                "@type": "EntryPoint",
                                "urlTemplate": "https://mindsthetics.com/search?q={search_term_string}"
                            },
                            "query-input": "required name=search_term_string"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Mindsthetics",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://mindsthetics.com/logo.png"
                            }
                        }
                    })
                }}
            />

            <Box
                component="main"
                sx={{
                    minHeight: '100vh',
                    width: '100%',
                    overflowX: 'hidden',
                }}
            >
                <Navigation />
                <HeroSection />
                <AboutSection />
                <PromotionsSection />
                <ServicesSection />
                <SpecialistsSection />
                <TestimonialsSection />
                <ContactSection />
                <Footer />
            </Box>
        </>
    );
}
