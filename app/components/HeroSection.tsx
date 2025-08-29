'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  PlayArrow as PlayIcon,
  Star as StarIcon,
  Verified as VerifiedIcon,
  LocalHospital as HospitalIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const stats = [
    { number: '5000+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction' },
    { number: 'FDA', label: 'Approved' },
  ];

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, rgba(42, 78, 78, 0.9) 0%, rgba(76, 107, 107, 0.8) 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.3,
        }}
      >
        <Image
          src="/assets/images/ClinicInterior.jpg"
          alt="Mindsthetic Clinic Interior"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </Box>

      {/* Overlay Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(42, 78, 78, 0.4) 0%, transparent 50%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: '1fr', 
            md: '1fr', 
            lg: '1fr 1fr' 
          }, 
          gap: { xs: 3, sm: 4, md: 4, lg: 4 }, 
          alignItems: 'center' 
        }}>
          {/* Left Content */}
          <Box sx={{ 
            order: { xs: 1, lg: 1 },
            textAlign: { xs: 'center', lg: 'left' }
          }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h1"
                  sx={{
                    color: 'white',
                    mb: 2,
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                    '@media (max-width:600px)': {
                      fontSize: '2.5rem',
                    },
                  }}
                >
                  INSPIRING SELF LOVE
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: 3,
                    fontWeight: 300,
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                    '@media (max-width:600px)': {
                      fontSize: '1.5rem',
                    },
                  }}
                >
                  ONE TREATMENT AT A TIME
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    mb: 4,
                    fontWeight: 400,
                    lineHeight: 1.6,
                    maxWidth: 600,
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  Pakistan's Leading AI-Powered Aesthetic Chain. Experience premium beauty treatments 
                  with cutting-edge technology and expert specialists.
                </Typography>
              </Box>

              {/* CTA Buttons */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                      color: theme.palette.primary.main,
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 35px rgba(0, 0, 0, 0.3)',
                      },
                    }}
                  >
                    Free Consultation
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayIcon />}
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    View Treatments
                  </Button>
                </motion.div>
              </Box>

              {/* Trust Indicators */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <VerifiedIcon sx={{ color: 'white', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    FDA Approved
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <HospitalIcon sx={{ color: 'white', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    Medical Experts
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <StarIcon sx={{ color: 'white', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    5-Star Rated
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Box
            sx={{
              width: 2,
              height: 40,
              background: 'linear-gradient(to bottom, transparent, white, transparent)',
              borderRadius: 1,
            }}
          />
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
