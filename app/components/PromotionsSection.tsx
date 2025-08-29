'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Timer as TimerIcon,
  LocalOffer as OfferIcon,
  Star as StarIcon,
  Verified as VerifiedIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PromotionsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7); // 7 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const promotions = [
    {
      title: 'Grand Opening Sale',
      discount: '20% OFF',
      cashback: '5% Cash Back',
      description: 'Limited time offer on all treatments',
      validUntil: '7 days left',
      featured: true,
    },
    {
      title: 'HydraFacial Special',
      discount: '25% OFF',
      cashback: '3% Cash Back',
      description: 'Advanced 12-step facial treatment',
      validUntil: '5 days left',
      featured: false,
    },
    {
      title: 'Laser Hair Removal',
      discount: '30% OFF',
      cashback: '5% Cash Back',
      description: 'Permanent hair reduction treatment',
      validUntil: '3 days left',
      featured: false,
    },
  ];

  const offers = [
    {
      title: 'Value Bundle',
      description: 'Save big with our treatment bundles',
      savings: 'Up to 40%',
      icon: <OfferIcon />,
    },
    {
      title: 'First Time Client',
      description: 'Special discount for new clients',
      savings: '15% OFF',
      icon: <StarIcon />,
    },
    {
      title: 'Referral Bonus',
      description: 'Earn rewards for referring friends',
      savings: '10% Credit',
      icon: <VerifiedIcon />,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(135deg, #2A4E4E 0%, #4C6B6B 100%)',
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
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                mb: 2,
                fontFamily: 'var(--font-bebas-neue)',
              }}
            >
              LIMITED TIME OFFERS
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: 800,
                mx: 'auto',
                mb: 4,
                fontWeight: 400,
              }}
            >
              Don't Miss Out on These Exclusive Deals
            </Typography>
          </Box>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card
            elevation={8}
            sx={{
              mb: 6,
              borderRadius: 4,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <CardContent sx={{ p: { xs: 4, md: 6 }, textAlign: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 3 }}>
                <TimerIcon sx={{ color: theme.palette.primary.main, fontSize: 30 }} />
                <Typography
                  variant="h4"
                  sx={{
                    color: theme.palette.primary.main,
                    fontFamily: 'var(--font-bebas-neue)',
                    fontWeight: 600,
                  }}
                >
                  OFFER ENDS IN
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 2, md: 4 }, flexWrap: 'wrap' }}>
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <Box
                    key={unit}
                    sx={{
                      textAlign: 'center',
                      minWidth: { xs: 60, md: 80 },
                    }}
                  >
                    <Box
                      sx={{
                        background: 'linear-gradient(135deg, #2A4E4E 0%, #4C6B6B 100%)',
                        color: 'white',
                        borderRadius: 2,
                        py: 2,
                        px: { xs: 1, md: 2 },
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          fontFamily: 'var(--font-bebas-neue)',
                        }}
                      >
                        {value.toString().padStart(2, '0')}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {unit}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </motion.div>

        {/* Promotions Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4, mb: 6 }}>
          {promotions.map((promotion, index) => (
            <motion.div
              key={promotion.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card
                elevation={8}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: promotion.featured ? `3px solid ${theme.palette.primary.main}` : '1px solid rgba(255, 255, 255, 0.2)',
                  position: 'relative',
                  overflow: 'visible',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                {promotion.featured && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -15,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                      color: 'white',
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      zIndex: 1,
                    }}
                  >
                    FEATURED OFFER
                  </Box>
                )}
                <CardContent sx={{ p: 4, pt: promotion.featured ? 6 : 4, textAlign: 'center' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: theme.palette.primary.main,
                      mb: 2,
                      fontFamily: 'var(--font-bebas-neue)',
                      fontWeight: 600,
                    }}
                  >
                    {promotion.title}
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="h3"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        fontFamily: 'var(--font-bebas-neue)',
                        mb: 1,
                      }}
                    >
                      {promotion.discount}
                    </Typography>
                    <Chip
                      label={promotion.cashback}
                      sx={{
                        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {promotion.description}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                      mb: 3,
                    }}
                  >
                    {promotion.validUntil}
                  </Typography>
                  
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
                    Claim Offer
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* Additional Offers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              mb: 4,
              textAlign: 'center',
              fontFamily: 'var(--font-bebas-neue)',
            }}
          >
            MORE SAVINGS
          </Typography>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <Card
                  elevation={6}
                  sx={{
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #2A4E4E 0%, #4C6B6B 100%)',
                          color: 'white',
                          mb: 2,
                        }}
                      >
                        {offer.icon}
                      </Box>
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
                      {offer.title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {offer.description}
                    </Typography>
                    
                    <Typography
                      variant="h4"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        fontFamily: 'var(--font-bebas-neue)',
                        mb: 3,
                      }}
                    >
                      {offer.savings}
                    </Typography>
                    
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      sx={{
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        '&:hover': {
                          borderColor: theme.palette.primary.dark,
                          backgroundColor: 'rgba(42, 78, 78, 0.04)',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                mb: 3,
                fontFamily: 'var(--font-bebas-neue)',
              }}
            >
              DON'T MISS THESE AMAZING DEALS
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 4,
                fontSize: '1.1rem',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Book your consultation today and take advantage of these limited-time offers. 
              Transform your beauty while saving big!
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
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                color: theme.palette.primary.main,
                '&:hover': {
                  background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Book Now & Save
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PromotionsSection;
