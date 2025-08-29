'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Face as FaceIcon,
  Spa as SpaIcon,
  FitnessCenter as FitnessIcon,
  Person as PersonIcon,
  Star as StarIcon,
  Verified as VerifiedIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 'skin-treatments',
      category: 'Skin Treatments',
      icon: <FaceIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'HydraFacial 12-Step',
      description: 'Advanced 12-step facial treatment that cleanses, exfoliates, extracts, and hydrates the skin for immediate results.',
      image: '/assets/images/patientTreatment.jpg',
      features: ['No Downtime', 'Visible Results', 'Suitable for All Skin Types'],
      price: 'From $150',
      rating: 5.0,
      reviews: 1200,
    },
    {
      id: 'laser-treatments',
      category: 'Laser Treatments',
      icon: <SpaIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Carbon Peel Laser',
      description: 'Revolutionary carbon peel treatment that removes dead skin cells and stimulates collagen production for radiant skin.',
      image: '/assets/images/laser-procedure.jpg',
      features: ['Pain-Free', 'Quick Recovery', 'Long-lasting Results'],
      price: 'From $200',
      rating: 4.9,
      reviews: 850,
    },
    {
      id: 'hair-removal',
      category: 'Hair Treatments',
      icon: <SpaIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Permanent Hair Removal',
      description: 'Advanced CoolGlide technology for permanent hair reduction on all skin types and body areas.',
      image: '/assets/images/equipementShowcase.jpg',
      features: ['Permanent Results', 'All Skin Types', 'Pain-Free'],
      price: 'From $100',
      rating: 4.8,
      reviews: 2100,
    },
    {
      id: 'face-sculpting',
      category: 'Face Sculpting',
      icon: <FaceIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: '7D HIFU Face Lift',
      description: 'Non-surgical face lifting treatment using advanced HIFU technology to tighten and lift facial skin.',
      image: '/assets/images/DoctorFillingInjection.jpg',
      features: ['Non-Surgical', 'Natural Results', 'No Recovery Time'],
      price: 'From $300',
      rating: 4.9,
      reviews: 650,
    },
    {
      id: 'body-contouring',
      category: 'Body Contouring',
      icon: <FitnessIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Non-Surgical Body Sculpting',
      description: 'Advanced body contouring treatments to reduce fat and tighten skin without surgery.',
      image: '/assets/images/ClinicInterior.jpg',
      features: ['Non-Invasive', 'Fat Reduction', 'Skin Tightening'],
      price: 'From $250',
      rating: 4.7,
      reviews: 420,
    },
    {
      id: 'mens-aesthetics',
      category: "Men's Aesthetics",
      icon: <PersonIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Men\'s Aesthetic Treatments',
      description: 'Specialized treatments designed for men\'s skin and aesthetic concerns.',
      image: '/assets/images/lipFillerTreatment.jpg',
      features: ['Men-Specific', 'Professional Results', 'Discrete Treatment'],
      price: 'From $180',
      rating: 4.8,
      reviews: 380,
    },
  ];

  const categories = [
    { id: 'skin-treatments', label: 'Skin Treatments', icon: <FaceIcon /> },
    { id: 'hair-treatments', label: 'Hair Treatments', icon: <SpaIcon /> },
    { id: 'body-contouring', label: 'Body Contouring', icon: <FitnessIcon /> },
    { id: 'mens-aesthetics', label: "Men's Aesthetics", icon: <PersonIcon /> },
  ];

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              sx={{
                color: theme.palette.primary.main,
                mb: 2,
                fontFamily: 'var(--font-bebas-neue)',
              }}
            >
              OUR TREATMENTS
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: 800,
                mx: 'auto',
                mb: 4,
                fontWeight: 400,
              }}
            >
              Advanced Aesthetic Solutions for Natural Beauty
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: 900,
                mx: 'auto',
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              Experience cutting-edge treatments with FDA/CE approved technology. 
              Our comprehensive range of services is designed to enhance your natural beauty 
              with visible results and no downtime.
            </Typography>
          </Box>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6, flexWrap: 'wrap', gap: 2 }}>
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  startIcon={category.icon}
                  onClick={() => document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    px: 3,
                    py: 1.5,
                    borderRadius: 1,
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: theme.palette.primary.dark,
                      backgroundColor: 'rgba(42, 78, 78, 0.04)',
                    },
                  }}
                >
                  {category.label}
                </Button>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Services Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                elevation={6}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                  border: '1px solid rgba(42, 78, 78, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(42, 78, 78, 0.15)',
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                {/* Service Image */}
                <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      background: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: 2,
                      px: 2,
                      py: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    <StarIcon sx={{ color: '#FFD700', fontSize: 16 }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                      {service.rating}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      background: 'linear-gradient(135deg, #2A4E4E 0%, #4C6B6B 100%)',
                      color: 'white',
                      borderRadius: 2,
                      px: 2,
                      py: 1,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {service.price}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ p: 4 }}>
                  {/* Category Badge */}
                  <Chip
                    label={service.category}
                    size="small"
                    sx={{
                      mb: 2,
                      background: 'rgba(42, 78, 78, 0.1)',
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                    }}
                  />

                  {/* Service Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      color: theme.palette.primary.main,
                      mb: 2,
                      fontFamily: 'var(--font-bebas-neue)',
                      fontWeight: 600,
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Service Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* Features */}
                  <Box sx={{ mb: 3 }}>
                    {service.features.map((feature, featureIndex) => (
                      <Box
                        key={featureIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          mb: 1,
                        }}
                      >
                        <VerifiedIcon sx={{ color: theme.palette.primary.main, fontSize: 16 }} />
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Reviews */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 3,
                      fontStyle: 'italic',
                    }}
                  >
                    {service.reviews} happy clients
                  </Typography>

                  {/* CTA Button */}
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    sx={{
                      py: 1.5,
                      fontWeight: 600,
                      background: 'linear-gradient(135deg, #2A4E4E 0%, #4C6B6B 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1a3a3a 0%, #2A4E4E 100%)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
                mb: 3,
                fontFamily: 'var(--font-bebas-neue)',
              }}
            >
              READY TO TRANSFORM YOUR BEAUTY?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                mb: 4,
                fontSize: '1.1rem',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Book your free consultation today and discover how our advanced treatments 
              can enhance your natural beauty with visible, long-lasting results.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              sx={{
                py: 2,
                px: 4,
                fontSize: '1.1rem',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #2A4E4E 0%, #4C6B6B 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1a3a3a 0%, #2A4E4E 100%)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Get Free Consultation
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesSection;
