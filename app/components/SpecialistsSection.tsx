'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Star as StarIcon,
  Verified as VerifiedIcon,
  LocalHospital as HospitalIcon,
  Psychology as PsychologyIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const SpecialistsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const specialists = [
    {
      name: 'Dr. Hira Ahmed',
      title: 'Lead Dermatologist & Laser Specialist',
      image: '/assets/images/DoctorFillingInjection.jpg',
      specialties: ['Laser Hair Removal', 'Skin Rejuvenation', 'Anti-Aging Treatments'],
      experience: '12+ Years',
      education: 'MBBS, FCPS Dermatology',
      rating: 4.9,
      reviews: 850,
      description: 'Leading expert in advanced laser treatments and skin rejuvenation procedures.',
      certifications: ['FDA Certified', 'Laser Specialist'],
    },
    {
      name: 'Dr. Sarah Khan',
      title: 'Aesthetic Medicine Specialist',
      image: '/assets/images/patientTreatment.jpg',
      specialties: ['HydraFacial', 'Chemical Peels', 'Dermal Fillers'],
      experience: '8+ Years',
      education: 'MBBS, Diploma in Aesthetic Medicine',
      rating: 4.8,
      reviews: 620,
      description: 'Specialized in non-surgical facial rejuvenation and advanced skin treatments.',
      certifications: ['Aesthetic Medicine', 'HydraFacial Certified'],
    },
    {
      name: 'Dr. Ali Hassan',
      title: 'Body Contouring Expert',
      image: '/assets/images/equipementShowcase.jpg',
      specialties: ['Body Sculpting', 'Fat Reduction', 'Skin Tightening'],
      experience: '10+ Years',
      education: 'MBBS, MS Plastic Surgery',
      rating: 4.9,
      reviews: 480,
      description: 'Expert in non-surgical body contouring and advanced fat reduction techniques.',
      certifications: ['Body Contouring', 'HIFU Specialist'],
    },
    {
      name: 'Dr. Fatima Zahra',
      title: 'Men\'s Aesthetics Specialist',
      image: '/assets/images/lipFillerTreatment.jpg',
      specialties: ['Men\'s Treatments', 'Hair Restoration', 'Facial Sculpting'],
      experience: '6+ Years',
      education: 'MBBS, Fellowship in Aesthetic Medicine',
      rating: 4.7,
      reviews: 320,
      description: 'Dedicated to providing specialized aesthetic treatments for men.',
      certifications: ['Men\'s Aesthetics', 'Hair Restoration'],
    },
  ];

  return (
    <Box
      id="specialists"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
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
              OUR SUPERSTARS
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
              Meet Our Expert Medical Team
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
              Our team of certified medical professionals brings together years of experience 
              and cutting-edge expertise to deliver exceptional results. Each specialist is 
              dedicated to providing personalized care with the highest standards of safety and quality.
            </Typography>
          </Box>
        </motion.div>

        {/* Specialists Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 4 }}>
          {specialists.map((specialist, index) => (
            <motion.div
              key={specialist.name}
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
                {/* Specialist Image */}
                <Box sx={{ position: 'relative', height: 280, overflow: 'hidden' }}>
                  <Image
                    src={specialist.image}
                    alt={specialist.name}
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
                      {specialist.rating}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                      p: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      {specialist.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 500,
                      }}
                    >
                      {specialist.title}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ p: 4 }}>
                  {/* Experience Badge */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <HospitalIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                    <Typography variant="body2" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                      {specialist.experience} Experience
                    </Typography>
                  </Box>

                  {/* Education */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 3,
                      fontStyle: 'italic',
                    }}
                  >
                    {specialist.education}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {specialist.description}
                  </Typography>

                  {/* Specialties */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      Specialties:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {specialist.specialties.map((specialty, specialtyIndex) => (
                        <Chip
                          key={specialtyIndex}
                          label={specialty}
                          size="small"
                          sx={{
                            background: 'rgba(42, 78, 78, 0.1)',
                            color: theme.palette.primary.main,
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Certifications */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      Certifications:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {specialist.certifications.map((cert, certIndex) => (
                        <Chip
                          key={certIndex}
                          label={cert}
                          size="small"
                          icon={<VerifiedIcon />}
                          sx={{
                            background: 'linear-gradient(135deg, #2A4E4E 0%, #4C6B6B 100%)',
                            color: 'white',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Reviews */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontStyle: 'italic',
                    }}
                  >
                    {specialist.reviews} satisfied patients
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* Team Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box sx={{ mt: { xs: 6, md: 8 }, textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
                mb: 4,
                fontFamily: 'var(--font-bebas-neue)',
              }}
            >
              LARGEST TEAM OF DERMATOLOGISTS
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4 }}>
              {[
                { number: '15+', label: 'Medical Experts' },
                { number: '50+', label: 'Years Combined Experience' },
                { number: '1000+', label: 'Successful Procedures' },
                { number: '100%', label: 'Certified Specialists' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h3"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        mb: 1,
                        fontFamily: 'var(--font-bebas-neue)',
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
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
              CONSULT WITH OUR EXPERTS
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
              Book a consultation with our expert specialists and discover personalized 
              treatment plans designed specifically for your aesthetic goals.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                  Book Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    py: 2,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    '&:hover': {
                      borderColor: theme.palette.primary.dark,
                      backgroundColor: 'rgba(42, 78, 78, 0.04)',
                    },
                  }}
                >
                  View Testimonials
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SpecialistsSection;
