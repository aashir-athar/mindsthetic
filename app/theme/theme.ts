import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2A4E4E', // Deep Teal/Green
      light: '#4C6B6B', // Muted Teal/Gray-Green
      dark: '#1a3a3a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4C6B6B', // Muted Teal/Gray-Green
      light: '#6B8A8A',
      dark: '#2A4E4E',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F5F5F5', // Very Light Gray/Off-White
      paper: '#D1DEDE', // Light Aqua/Gray
    },
    text: {
      primary: '#2A4E4E',
      secondary: '#4C6B6B',
    },
    grey: {
      50: '#F5F5F5',
      100: '#D1DEDE',
      200: '#B8C8C8',
      300: '#9FB2B2',
      400: '#869C9C',
      500: '#6B8A8A',
      600: '#4C6B6B',
      700: '#2A4E4E',
      800: '#1a3a3a',
      900: '#0d1d1d',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
    h1: {
      fontFamily: 'var(--font-bebas-neue), Bebas Neue, system-ui, sans-serif',
      fontSize: '3.5rem',
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: 'var(--font-bebas-neue), Bebas Neue, system-ui, sans-serif',
      fontSize: '2.5rem',
      fontWeight: 400,
      lineHeight: 1.3,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontFamily: 'var(--font-bebas-neue), Bebas Neue, system-ui, sans-serif',
      fontSize: '2rem',
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontFamily: 'var(--font-bebas-neue), Bebas Neue, system-ui, sans-serif',
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: 'var(--font-bebas-neue), Bebas Neue, system-ui, sans-serif',
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    h6: {
      fontFamily: 'var(--font-bebas-neue), Bebas Neue, system-ui, sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    button: {
      fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
      fontSize: '0.875rem',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 24px',
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(42, 78, 78, 0.3)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #2A4E4E 0%, #4C6B6B 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1a3a3a 0%, #2A4E4E 100%)',
          },
        },
        outlined: {
          borderColor: '#2A4E4E',
          color: '#2A4E4E',
          '&:hover': {
            backgroundColor: 'rgba(42, 78, 78, 0.04)',
            borderColor: '#1a3a3a',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#4C6B6B',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2A4E4E',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(245, 245, 245, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
