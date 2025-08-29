'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  Fade,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Phone as PhoneIcon,
  WhatsApp as WhatsAppIcon,
  ExpandMore as ArrowDownIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileOpen(false);
    handleMenuClose();
  };

  const menuItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const treatmentItems = [
    { label: 'Skin Treatments', id: 'skin-treatments' },
    { label: 'Hair Treatments', id: 'hair-treatments' },
    { label: 'Body Contouring', id: 'body-contouring' },
    { label: "Men's Aesthetics", id: 'mens-aesthetics' },
  ];

  const drawer = (
    <Box sx={{ 
      width: 320, 
      height: '100%',
      background: 'linear-gradient(180deg, #F5F5F5 0%, #D1DEDE 100%)',
      position: 'relative'
    }}>
      {/* Mobile Header */}
      <Box sx={{ 
        p: 3, 
        borderBottom: '1px solid rgba(42, 78, 78, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'var(--font-bebas-neue)',
            color: '#2A4E4E',
            letterSpacing: '0.5px',
          }}
        >
          MINDSTHETIC
        </Typography>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ 
            color: '#2A4E4E',
            '&:hover': {
              backgroundColor: 'rgba(42, 78, 78, 0.08)',
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Mobile Menu Items */}
      <List sx={{ px: 2, py: 3 }}>
        {menuItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ListItem
              onClick={() => scrollToSection(item.id)}
              sx={{
                py: 1.5,
                px: 2,
                mb: 1,
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(42, 78, 78, 0.08)',
                  transform: 'translateX(4px)',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#2A4E4E',
                }}
              />
            </ListItem>
          </motion.div>
        ))}

        {/* Mobile Treatments Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Box sx={{ mt: 2, mb: 1 }}>
            <Typography
              sx={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#4C6B6B',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                px: 2,
                mb: 1,
              }}
            >
              Treatments
            </Typography>
            {treatmentItems.map((item, index) => (
              <ListItem
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  py: 1,
                  px: 2,
                  ml: 2,
                  mb: 0.5,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: 'rgba(42, 78, 78, 0.06)',
                    transform: 'translateX(4px)',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.9rem',
                    fontWeight: 400,
                    color: '#4C6B6B',
                  }}
                />
              </ListItem>
            ))}
          </Box>
        </motion.div>
      </List>

      {/* Mobile Contact Section */}
      <Box sx={{ 
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        p: 3,
        borderTop: '1px solid rgba(42, 78, 78, 0.1)',
        background: 'rgba(245, 245, 245, 0.8)',
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<PhoneIcon sx={{ fontSize: '1rem' }} />}
            onClick={() => scrollToSection('contact')}
            fullWidth
            sx={{
              borderColor: '#2A4E4E',
              color: '#2A4E4E',
              fontSize: '0.875rem',
              fontWeight: 500,
              fontFamily: 'var(--font-inter)',
              textTransform: 'none',
              borderRadius: '8px',
              py: 1.5,
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: 'rgba(42, 78, 78, 0.08)',
                transform: 'translateY(-1px)',
              },
            }}
          >
            Call Now
          </Button>
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon sx={{ fontSize: '1rem' }} />}
            onClick={() => window.open('https://wa.me/923074778889', '_blank')}
            fullWidth
            sx={{
              backgroundColor: '#2A4E4E',
              color: '#F5F5F5',
              fontSize: '0.875rem',
              fontWeight: 500,
              fontFamily: 'var(--font-inter)',
              textTransform: 'none',
              borderRadius: '8px',
              py: 1.5,
              boxShadow: '0 2px 8px rgba(42, 78, 78, 0.2)',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: '#4C6B6B',
                transform: 'translateY(-1px)',
                boxShadow: '0 4px 16px rgba(42, 78, 78, 0.3)',
              },
            }}
          >
            WhatsApp
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(245, 245, 245, 0.98)'
            : 'rgba(245, 245, 245, 0.95)',
          backdropFilter: 'blur(20px)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          borderBottom: scrolled 
            ? '1px solid rgba(42, 78, 78, 0.1)' 
            : '1px solid transparent',
          boxShadow: scrolled 
            ? '0 4px 20px rgba(42, 78, 78, 0.08)'
            : 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ 
            justifyContent: 'space-between', 
            py: { xs: 1, md: 1.5 },
            minHeight: { xs: '64px', md: '72px' },
          }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <Typography
                variant="h4"
                component="div"
                sx={{
                  fontFamily: 'var(--font-bebas-neue)',
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  color: '#2A4E4E',
                  cursor: 'pointer',
                  letterSpacing: '0.5px',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    color: '#4C6B6B',
                    transform: 'scale(1.02)',
                  },
                }}
                onClick={() => scrollToSection('hero')}
              >
                MINDSTHETIC
              </Typography>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {menuItems.map((item, index) => (
                    <Button
                      key={item.label}
                      onClick={() => scrollToSection(item.id)}
                      sx={{
                        color: '#2A4E4E',
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        textTransform: 'none',
                        px: 2,
                        py: 1,
                        borderRadius: '6px',
                        transition: 'all 0.2s ease-in-out',
                        position: 'relative',
                        '&:hover': {
                          backgroundColor: 'rgba(42, 78, 78, 0.08)',
                          transform: 'translateY(-1px)',
                        },
                        '&:before': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          width: '0%',
                          height: '2px',
                          backgroundColor: '#2A4E4E',
                          transition: 'all 0.3s ease-in-out',
                          transform: 'translateX(-50%)',
                        },
                        '&:hover:before': {
                          width: '80%',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}

                  {/* Treatments Dropdown */}
                  <Button
                    onClick={handleMenuOpen}
                    endIcon={
                      <ArrowDownIcon 
                        sx={{ 
                          fontSize: '1.2rem',
                          transition: 'transform 0.2s ease-in-out',
                          transform: Boolean(anchorEl) ? 'rotate(180deg)' : 'rotate(0deg)',
                        }} 
                      />
                    }
                    sx={{
                      color: '#2A4E4E',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      textTransform: 'none',
                      px: 2,
                      py: 1,
                      borderRadius: '6px',
                      transition: 'all 0.2s ease-in-out',
                      position: 'relative',
                      backgroundColor: Boolean(anchorEl) ? 'rgba(42, 78, 78, 0.08)' : 'transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(42, 78, 78, 0.08)',
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    Treatments
                  </Button>
                </Box>
              </motion.div>
            )}

            {/* Desktop Contact Buttons */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                  <Button
                    variant="outlined"
                    startIcon={<PhoneIcon sx={{ fontSize: '0.9rem' }} />}
                    onClick={() => scrollToSection('contact')}
                    sx={{
                      borderColor: '#2A4E4E',
                      color: '#2A4E4E',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      fontFamily: 'var(--font-inter)',
                      textTransform: 'none',
                      borderWidth: '1.5px',
                      borderRadius: '6px',
                      px: 2,
                      py: 0.8,
                      minHeight: '36px',
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        borderColor: '#4C6B6B',
                        backgroundColor: 'rgba(42, 78, 78, 0.06)',
                        transform: 'translateY(-1px)',
                        boxShadow: '0 4px 12px rgba(42, 78, 78, 0.15)',
                      },
                    }}
                  >
                    Call Now
                  </Button>

                  <Button
                    variant="contained"
                    startIcon={<WhatsAppIcon sx={{ fontSize: '0.9rem' }} />}
                    onClick={() => window.open('https://wa.me/923074778889', '_blank')}
                    sx={{
                      backgroundColor: '#2A4E4E',
                      color: '#F5F5F5',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      fontFamily: 'var(--font-inter)',
                      textTransform: 'none',
                      borderRadius: '6px',
                      px: 2,
                      py: 0.8,
                      minHeight: '36px',
                      boxShadow: '0 2px 8px rgba(42, 78, 78, 0.2)',
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        backgroundColor: '#4C6B6B',
                        transform: 'translateY(-1px)',
                        boxShadow: '0 4px 16px rgba(42, 78, 78, 0.25)',
                      },
                    }}
                  >
                    WhatsApp
                  </Button>
                </Box>
              </motion.div>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  color: '#2A4E4E',
                  p: 1,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: 'rgba(42, 78, 78, 0.08)',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 320,
            border: 'none',
            boxShadow: '0 8px 32px rgba(42, 78, 78, 0.15)',
          },
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(42, 78, 78, 0.2)',
            backdropFilter: 'blur(4px)',
          },
        }}
      >
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {drawer}
            </motion.div>
          )}
        </AnimatePresence>
      </Drawer>

      {/* Treatments Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        TransitionComponent={Fade}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 220,
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(42, 78, 78, 0.12)',
            border: '1px solid rgba(42, 78, 78, 0.08)',
            background: 'rgba(245, 245, 245, 0.98)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        {treatmentItems.map((service, index) => (
          <MenuItem
            key={service.label}
            onClick={() => {
              scrollToSection(service.id);
              handleMenuClose();
            }}
            sx={{
              py: 1.5,
              px: 2.5,
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: 'rgba(42, 78, 78, 0.08)',
                transform: 'translateX(4px)',
              },
              '&:first-of-type': {
                mt: 0.5,
              },
              '&:last-child': {
                mb: 0.5,
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.9rem',
                color: '#2A4E4E',
                fontWeight: 500,
              }}
            >
              {service.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>

      {/* Spacer for fixed navbar */}
      <Toolbar sx={{ minHeight: { xs: '64px', md: '72px' } }} />
    </>
  );
};

export default Navigation;