'use client';

import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PromotionsSection from './components/PromotionsSection';
import ServicesSection from './components/ServicesSection';
import SpecialistsSection from './components/SpecialistsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ClientOnly from './components/ClientOnly';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <ClientOnly>
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
    </ClientOnly>
  );
}
