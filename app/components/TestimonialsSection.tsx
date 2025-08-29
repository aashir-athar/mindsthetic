'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import {
  Star as StarIcon,
  Verified as VerifiedIcon,
  FormatQuote as QuoteIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const TestimonialsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      name: 'Hafsa Butt',
      title: 'Celebrity & Model',
      image: '/assets/images/patientTreatment.jpg',
      rating: 5,
      review: 'Mindsthetic transformed my confidence completely! The HydraFacial treatment gave me the most radiant skin I\'ve ever had. The team is incredibly professional and the results are beyond my expectations.',
      treatment: 'HydraFacial 12-Step',
      isCelebrity: true,
      verified: true,
    },
    {
      id: 2,
      name: 'Sunita Marshall',
      title: 'Actress & TV Host',
      image: '/assets/images/laser-procedure.jpg',
      rating: 5,
      review: 'I\'ve tried many aesthetic clinics, but Mindsthetic stands out for their expertise and attention to detail. The laser hair removal treatment was pain-free and the results are permanent. Highly recommended!',
      treatment: 'Laser Hair Removal',
      isCelebrity: true,
      verified: true,
    },
    {
      id: 3,
      name: 'Monica Ahmed',
      title: 'Business Professional',
      image: '/assets/images/ClinicInterior.jpg',
      rating: 5,
      review: 'The 7D HIFU face lift treatment exceeded all my expectations. No surgery, no downtime, but amazing results! Dr. Hira and her team are true professionals who really care about their patients.',
      treatment: '7D HIFU Face Lift',
      isCelebrity: false,
      verified: true,
    },
    {
      id: 4,
      name: 'Ahmed Khan',
      title: 'Entrepreneur',
      image: '/assets/images/equipementShowcase.jpg',
      rating: 5,
      review: 'As a man, I was initially hesitant about aesthetic treatments, but Mindsthetic made me feel comfortable throughout the entire process. The results are natural and professional.',
      treatment: 'Men\'s Aesthetic Treatment',
      isCelebrity: false,
      verified: true,
    },
    {
      id: 5,
      name: 'Fatima Zahra',
      title: 'Fashion Designer',
      image: '/assets/images/DoctorFillingInjection.jpg',
      rating: 5,
      review: 'The carbon peel laser treatment gave me the perfect canvas for my makeup. My skin texture has improved dramatically and I receive compliments daily. Thank you Mindsthetic!',
      treatment: 'Carbon Peel Laser',
      isCelebrity: false,
      verified: true,
    },
    {
      id: 6,
      name: 'Usman Ali',
      title: 'Fitness Trainer',
      image: '/assets/images/lipFillerTreatment.jpg',
      rating: 5,
      review: 'The body contouring treatment helped me achieve the definition I was looking for. The non-surgical approach was perfect for my lifestyle. The team is amazing!',
      treatment: 'Body Contouring',
      isCelebrity: false,
      verified: true,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Box
      id="testimonials"
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
              HEAR WHAT CELEBRITIES ARE SAYING
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
              Over 5000 Happy Clients Trust Mindsthetic
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
              Discover why celebrities and clients choose Mindsthetic for their aesthetic journey.
              Read authentic reviews from real people who have experienced our transformative treatments.
            </Typography>
          </Box>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box sx={{ position: 'relative', maxWidth: 800, mx: 'auto' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  elevation={8}
                  sx={{
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    border: '1px solid rgba(42, 78, 78, 0.1)',
                    position: 'relative',
                    overflow: 'visible',
                  }}
                >
                  <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                    {/* Quote Icon */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -20,
                        left: 40,
                        background: 'linear-gradient(135deg, #2A4E4E 0%, #4C6B6B 100%)',
                        borderRadius: '50%',
                        width: 40,
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1,
                      }}
                    >
                      <QuoteIcon sx={{ color: 'white', fontSize: 20 }} />
                    </Box>

                    {/* Testimonial Content */}
                    <Box sx={{ mt: 2 }}>
                      {/* Rating */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                        <Rating value={currentTestimonial.rating} readOnly size="large" />
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                          {currentTestimonial.rating}/5
                        </Typography>
                        {currentTestimonial.verified && (
                          <VerifiedIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                        )}
                      </Box>

                      {/* Review Text */}
                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.text.primary,
                          mb: 4,
                          lineHeight: 1.8,
                          fontStyle: 'italic',
                          fontSize: '1.1rem',
                        }}
                      >
                        "{currentTestimonial.review}"
                      </Typography>

                      {/* Client Info */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Avatar
                          sx={{
                            width: 80,
                            height: 80,
                            border: '3px solid',
                            borderColor: theme.palette.primary.main,
                          }}
                        >
                          <Image
                            src={currentTestimonial.image}
                            alt={currentTestimonial.name}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </Avatar>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              color: theme.palette.primary.main,
                              fontWeight: 600,
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                            }}
                          >
                            {currentTestimonial.name}
                            {currentTestimonial.isCelebrity && (
                              <StarIcon sx={{ color: '#FFD700', fontSize: 20 }} />
                            )}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontWeight: 500,
                            }}
                          >
                            {currentTestimonial.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.primary.main,
                              fontWeight: 600,
                            }}
                          >
                            {currentTestimonial.treatment}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
              <IconButton
                onClick={prevTestimonial}
                sx={{
                  background: 'linear-gradient(135deg, #2A4E4E 0%, #4C6B6B 100%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1a3a3a 0%, #2A4E4E 100%)',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                onClick={nextTestimonial}
                sx={{
                  background: 'linear-gradient(135deg, #2A4E4E 0%, #4C6B6B 100%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1a3a3a 0%, #2A4E4E 100%)',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </Box>

            {/* Dots Indicator */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: index === currentIndex ? theme.palette.primary.main : 'rgba(42, 78, 78, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: theme.palette.primary.main,
                      transform: 'scale(1.2)',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Statistics */}
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
              CLIENT SATISFACTION METRICS
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4 }}>
              {[
                { number: '5000+', label: 'Happy Clients' },
                { number: '4.9/5', label: 'Average Rating' },
                { number: '98%', label: 'Satisfaction Rate' },
                { number: '1000+', label: '5-Star Reviews' },
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
              JOIN OUR HAPPY CLIENTS
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
              Experience the same exceptional results and join thousands of satisfied clients
              who have transformed their confidence with Mindsthetic.
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
                  Book Your Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
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
                  View Treatments
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
