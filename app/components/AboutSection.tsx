'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import {
  Verified as VerifiedIcon,
  LocalHospital as HospitalIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Psychology as PsychologyIcon,
  Spa as SpaIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tasks = [
    {
      icon: <VerifiedIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'FDA/CE Approved',
      description: 'All treatments are FDA and CE approved, ensuring the highest safety standards and quality assurance.',
      stats: '100% Safe',
    },
    {
      icon: <HospitalIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Medical Experts',
      description: 'Founded by medical experts with the largest team of dermatologists in Pakistan.',
      stats: '15+ Specialists',
    },
    {
      icon: <StarIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'No.1 Aesthetics Brand',
      description: 'Pakistan\'s leading AI-powered aesthetic chain with cutting-edge technology.',
      stats: '5000+ Clients',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Visible Results',
      description: 'Advanced treatments with visible results and no downtime for natural beauty enhancement.',
      stats: '95% Success',
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'AI-Powered Care',
      description: 'State-of-the-art AI technology for personalized treatment plans and optimal results.',
      stats: 'AI Driven',
    },
    {
      icon: <SpaIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Premium Experience',
      description: 'Luxurious clinic environment with premium equipment and exceptional customer service.',
      stats: '5-Star Rated',
    },
  ];

  const statistics = [
    { number: '5000+', label: 'Happy Clients', color: theme.palette.primary.main },
    { number: '15+', label: 'Years Experience', color: theme.palette.secondary.main },
    { number: '100%', label: 'Satisfaction Rate', color: theme.palette.primary.main },
    { number: '85%', label: 'Client Retention', color: theme.palette.secondary.main },
  ];

  return (
    <Box
      id="about"
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
              ABOUT MINDSTHETIC
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
              Pakistan's Leading AI-Powered Aesthetic Chain
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
              Founded by medical experts with the largest team of dermatologists in Pakistan. 
              We combine cutting-edge technology with personalized care to deliver exceptional results. 
              Our FDA/CE approved treatments ensure safety while our AI-powered approach guarantees optimal outcomes.
            </Typography>
          </Box>
        </motion.div>

        {/* Task Cards Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3, mb: { xs: 6, md: 8 } }}>
          {tasks.map((task, index) => (
            <Box key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  elevation={4}
                  sx={{
                    height: '100%',
                    borderRadius: 3,
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
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>
                      {task.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: theme.palette.primary.main,
                        mb: 2,
                        fontFamily: 'var(--font-bebas-neue)',
                        fontWeight: 600,
                      }}
                    >
                      {task.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {task.description}
                    </Typography>
                    <Paper
                      elevation={2}
                      sx={{
                        display: 'inline-block',
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        background: 'linear-gradient(135deg, #2A4E4E 0%, #4C6B6B 100%)',
                        color: 'white',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {task.stats}
                      </Typography>
                    </Paper>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Paper
            elevation={8}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #2A4E4E 0%, #4C6B6B 100%)',
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
                background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
                zIndex: 1,
              },
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                  mb: 4,
                  fontFamily: 'var(--font-bebas-neue)',
                  fontWeight: 600,
                }}
              >
                OUR ACHIEVEMENTS
              </Typography>
              
                             <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4 }}>
                {statistics.map((stat, index) => (
                  <Box key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      >
                        <Typography
                          variant="h2"
                          sx={{
                            color: 'white',
                            fontWeight: 700,
                            mb: 1,
                            fontFamily: 'var(--font-bebas-neue)',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                          }}
                        >
                          {stat.number}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </motion.div>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Box sx={{ mt: { xs: 6, md: 8 }, textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
                mb: 3,
                fontFamily: 'var(--font-bebas-neue)',
              }}
            >
              WHY CHOOSE MINDSTHETIC?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ width: { xs: '100%', md: '66.67%' } }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  We are committed to providing the highest quality aesthetic treatments with a focus on safety, 
                  innovation, and personalized care. Our state-of-the-art facility combines medical expertise 
                  with advanced technology to deliver exceptional results that enhance your natural beauty.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}
                >
                  From our FDA/CE approved treatments to our AI-powered care system, every aspect of your 
                  experience is designed to ensure optimal results and complete satisfaction. Join thousands 
                  of happy clients who have transformed their confidence with Mindsthetic.
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;
