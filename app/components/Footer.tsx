'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  WhatsApp as WhatsAppIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
  ArrowUpward as ArrowUpwardIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'HydraFacial 12-Step',
    'Carbon Peel Laser',
    'Permanent Hair Removal',
    '7D HIFU Face Lift',
    'Body Contouring',
    'Men\'s Aesthetics',
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Our Specialists', href: '#specialists' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Book Consultation', href: '#contact' },
  ];

  const locations = [
    {
      name: 'Lahore DHA Phase 5',
      address: 'Main Boulevard, DHA Phase 5, Lahore',
      phone: '+92 311 111 7546',
    },
    {
      name: 'Karachi DHA',
      address: 'DHA Phase 6, Karachi',
      phone: '+92 321 111 7546',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          zIndex: 1,
        },
      }}
    >
      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          position: 'absolute',
          top: -25,
          right: 50,
          zIndex: 10,
        }}
      >
        <IconButton
          onClick={scrollToTop}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: theme.palette.primary.main,
            width: 50,
            height: 50,
            '&:hover': {
              backgroundColor: 'white',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      </motion.div>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Main Footer Content */}
        <Box sx={{ pt: 8, pb: 4 }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)', 
              md: 'repeat(4, 1fr)' 
            }, 
            gap: { xs: 4, sm: 4, md: 4 } 
          }}>
            {/* Company Info */}
            <Box>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'var(--font-bebas-neue)',
                    fontWeight: 600,
                    mb: 2,
                    color: 'white',
                  }}
                >
                  MINDSTHETIC
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    lineHeight: 1.8,
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  Pakistan's leading AI-powered aesthetic chain, delivering premium beauty treatments 
                  with cutting-edge technology and expert medical care. Transform your confidence with us.
                </Typography>
                
                {/* Contact Info */}
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <PhoneIcon sx={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      +92 311 111 7546
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <EmailIcon sx={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      info@mindsthetic.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationIcon sx={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      Lahore DHA Phase 5, Pakistan
                    </Typography>
                  </Box>
                </Box>

                {/* Social Media */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    sx={{
                      color: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      color: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      color: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      color: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <YouTubeIcon />
                  </IconButton>
                </Box>
              </motion.div>
            </Box>

            {/* Quick Links */}
            <Box>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'var(--font-bebas-neue)',
                    fontWeight: 600,
                    mb: 3,
                    color: 'white',
                  }}
                >
                  QUICK LINKS
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {quickLinks.map((link, index) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: 'white',
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              </motion.div>
            </Box>

            {/* Services */}
            <Box>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'var(--font-bebas-neue)',
                    fontWeight: 600,
                    mb: 3,
                    color: 'white',
                  }}
                >
                  OUR SERVICES
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {services.map((service, index) => (
                    <Link
                      key={service}
                      href="#services"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: 'white',
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      {service}
                    </Link>
                  ))}
                </Box>
              </motion.div>
            </Box>

            {/* Locations */}
            <Box>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'var(--font-bebas-neue)',
                    fontWeight: 600,
                    mb: 3,
                    color: 'white',
                  }}
                >
                  OUR LOCATIONS
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {locations.map((location, index) => (
                    <Box key={location.name}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: 'white',
                        }}
                      >
                        {location.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          mb: 0.5,
                        }}
                      >
                        {location.address}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                        }}
                      >
                        {location.phone}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Bottom Footer */}
        <Box sx={{ py: 3, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 1,
              }}
            >
              © 2024 Mindsthetic. All rights reserved.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              Design with ♥ by Aashir Athar
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
