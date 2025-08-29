'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon, 
  LocationOn as LocationIcon,
  WhatsApp as WhatsAppIcon,
  AccessTime as TimeIcon,
  Verified as VerifiedIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Thank you! We will contact you within 24 hours.',
      severity: 'success',
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      treatment: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const contactInfo = [
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Call Us',
      details: ['+92 311 111 7546', '+92 321 111 7546'],
      action: 'Call Now',
      actionLink: 'tel:+923111117546',
    },
    {
      icon: <WhatsAppIcon sx={{ fontSize: 40, color: '#25D366' }} />,
      title: 'WhatsApp',
      details: ['+92 311 111 7546', 'Quick Response'],
      action: 'Chat Now',
      actionLink: 'https://wa.me/923111117546',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Email Us',
      details: ['info@mindsthetic.com', 'support@mindsthetic.com'],
      action: 'Send Email',
      actionLink: 'mailto:info@mindsthetic.com',
    },
    {
      icon: <LocationIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Visit Us',
      details: ['Lahore DHA Phase 5', 'Lahore, Pakistan'],
      action: 'Get Directions',
      actionLink: 'https://maps.google.com',
    },
  ];

  const locations = [
    {
      name: 'Lahore DHA Phase 5',
      address: 'DHA Phase 5, Lahore, Pakistan',
      phone: '+92 311 111 7546',
      hours: 'Mon-Sat: 10:00 AM - 8:00 PM',
      isMain: true,
    },
    {
      name: 'Karachi DHA',
      address: 'DHA Phase 6, Karachi, Pakistan',
      phone: '+92 321 111 7546',
      hours: 'Mon-Sat: 10:00 AM - 8:00 PM',
      isMain: false,
    },
  ];

  return (
    <Box
      id="contact"
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
              GET IN TOUCH
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
              Book Your Free Consultation Today
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
              Ready to transform your beauty? Contact us for a free consultation with our expert specialists.
              We're here to answer all your questions and help you achieve your aesthetic goals.
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: 4,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}>
          {/* Contact Form */}
          <Box>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card
                elevation={8}
                sx={{
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                  border: '1px solid rgba(42, 78, 78, 0.1)',
                }}
              >
                <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: theme.palette.primary.main,
                      mb: 4,
                      fontFamily: 'var(--font-bebas-neue)',
                    }}
                  >
                    FREE CONSULTATION
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit}>
                    {/* First Row - 4 fields */}
                    <Box sx={{ 
                      display: 'grid', 
                      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
                      gap: 3, 
                      mb: 4 
                    }}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        value={formData.name}
                        onChange={handleInputChange('name')}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 1,
                          },
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange('phone')}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 1,
                          },
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 1,
                          },
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Treatment of Interest"
                        value={formData.treatment}
                        onChange={handleInputChange('treatment')}
                        placeholder="e.g., HydraFacial, Laser Hair Removal, etc."
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 1,
                          },
                        }}
                      />
                    </Box>

                    {/* Message Field - Bigger */}
                    <Box sx={{ mb: 4 }}>
                      <TextField
                        fullWidth
                        label="Message (Optional)"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange('message')}
                        placeholder="Tell us about your aesthetic goals and any specific concerns you'd like to discuss..."
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 1,
                          },
                        }}
                      />
                    </Box>

                    {/* Submit Button */}
                    <Box sx={{ mb: 3 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        sx={{
                          py: 2.5,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          borderRadius: 2,
                          background: 'linear-gradient(135deg, #2A4E4E 0%, #4C6B6B 100%)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #1a3a3a 0%, #2A4E4E 100%)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(42, 78, 78, 0.3)',
                          },
                        }}
                      >
                        Book Free Consultation
                      </Button>
                    </Box>

                    {/* Verification Notice */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                      <VerifiedIcon sx={{ color: theme.palette.primary.main }} />
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        We'll contact you within 24 hours
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Box>

          {/* Contact Information */}
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 3,
                height: '100%'
              }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Card
                      elevation={4}
                      sx={{
                        height: '100%',
                        minHeight: 200,
                        minWidth: 400,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        border: '1px solid rgba(42, 78, 78, 0.1)',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 12px 30px rgba(42, 78, 78, 0.15)',
                        },
                      }}
                    >
                      <CardContent sx={{
                        p: 4,
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        textAlign: 'center'
                      }}>
                        <Box>
                          <Box sx={{ mb: 3 }}>
                            {info.icon}
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              color: theme.palette.primary.main,
                              fontWeight: 600,
                              mb: 2,
                              fontSize: '1.2rem',
                            }}
                          >
                            {info.title}
                          </Typography>
                          <Box sx={{ mb: 3 }}>
                            {info.details.map((detail, detailIndex) => (
                              <Typography
                                key={detailIndex}
                                variant="body1"
                                sx={{
                                  color: theme.palette.text.secondary,
                                  mb: 0.5,
                                  fontSize: '1rem',
                                }}
                              >
                                {detail}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                        <Button
                          variant="contained"
                          onClick={() => window.open(info.actionLink, '_blank')}
                          sx={{
                            py: 1.5,
                            px: 3,
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            borderRadius: 1,
                            background: 'linear-gradient(135deg, #2A4E4E 0%, #4C6B6B 100%)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #1a3a3a 0%, #2A4E4E 100%)',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 20px rgba(42, 78, 78, 0.25)',
                            },
                          }}
                        >
                          {info.action}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>
        </Box>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Box sx={{ mt: { xs: 8, md: 12 } }}>
            <Typography
              variant="h3"
              sx={{
                color: theme.palette.primary.main,
                mb: 6,
                textAlign: 'center',
                fontFamily: 'var(--font-bebas-neue)',
              }}
            >
              OUR LOCATIONS
            </Typography>

            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
              gap: 4 
            }}>
              {locations.map((location, index) => (
                <Box key={location.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    <Card
                      elevation={6}
                      sx={{
                        height: '100%',
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        border: location.isMain ? `2px solid ${theme.palette.primary.main}` : '1px solid rgba(42, 78, 78, 0.1)',
                        position: 'relative',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 12px 30px rgba(42, 78, 78, 0.15)',
                        },
                      }}
                    >
                      {location.isMain && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 10,
                            left: 30,
                            background: 'linear-gradient(135deg, #2A4E4E 0%, #4C6B6B 100%)',
                            color: 'white',
                            px: 2,
                            py: 0.5,
                            borderRadius: 1,
                            fontSize: '0.8rem',
                            fontWeight: 600,
                          }}
                        >
                          MAIN BRANCH
                        </Box>
                      )}
                      <CardContent sx={{ p: 4, pt: 6 }}>
                        <Typography
                          variant="h5"
                          sx={{
                            color: theme.palette.primary.main,
                            mb: 2,
                            fontWeight: 600,
                          }}
                        >
                          {location.name}
                        </Typography>
                        <Box sx={{ mb: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 2 }}>
                            <LocationIcon sx={{ color: theme.palette.primary.main, mt: 0.5 }} />
                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                              {location.address}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <PhoneIcon sx={{ color: theme.palette.primary.main }} />
                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                              {location.phone}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <TimeIcon sx={{ color: theme.palette.primary.main }} />
                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                              {location.hours}
                            </Typography>
                          </Box>
                        </Box>
                        <Button
                          variant="contained"
                          fullWidth
                          onClick={() => window.open('https://maps.google.com', '_blank')}
                          sx={{
                            background: 'linear-gradient(135deg, #2A4E4E 0%, #4C6B6B 100%)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #1a3a3a 0%, #2A4E4E 100%)',
                            },
                          }}
                        >
                          Get Directions
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* Snackbar for form submission */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;