'use client';

import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { Refresh, Home } from '@mui/icons-material';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          gap: 3,
        }}
      >
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            backgroundColor: 'rgba(244, 67, 54, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: '4rem',
              color: 'error.main',
              fontWeight: 300,
            }}
          >
            !
          </Typography>
        </Box>

        <Typography
          variant="h4"
          sx={{
            color: 'primary.main',
            fontFamily: 'var(--font-bebas-neue)',
            mb: 1,
          }}
        >
          Oops! Something went wrong
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            maxWidth: 400,
            lineHeight: 1.6,
            mb: 3,
          }}
        >
          We encountered an unexpected error while loading the page. 
          Don't worry, our team has been notified and we're working to fix it.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Button
            variant="contained"
            startIcon={<Refresh />}
            onClick={reset}
            sx={{
              px: 3,
              py: 1.5,
              borderRadius: 25,
            }}
          >
            Try Again
          </Button>
          
          <Button
            variant="outlined"
            startIcon={<Home />}
            onClick={() => window.location.href = '/'}
            sx={{
              px: 3,
              py: 1.5,
              borderRadius: 25,
            }}
          >
            Go Home
          </Button>
        </Box>

        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            mt: 2,
          }}
        >
          Error ID: {error.digest || 'Unknown'}
        </Typography>
      </Box>
    </Container>
  );
};

export default Error;
