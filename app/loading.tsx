'use client';

import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: 'background.default',
        gap: 3,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress
          size={60}
          thickness={4}
          sx={{
            color: 'primary.main',
            '@keyframes spin': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 30,
            height: 30,
            borderRadius: '50%',
            backgroundColor: 'primary.main',
            opacity: 0.3,
            '@keyframes pulse': {
              '0%, 100%': { 
                opacity: 0.3, 
                transform: 'translate(-50%, -50%) scale(1)' 
              },
              '50%': { 
                opacity: 0.1, 
                transform: 'translate(-50%, -50%) scale(1.2)' 
              },
            },
            animation: 'pulse 2s ease-in-out infinite',
          }}
        />
      </Box>
      
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'var(--font-bebas-neue)',
          color: 'primary.main',
          textAlign: 'center',
          fontSize: { xs: '1.5rem', md: '2rem' },
        }}
      >
        Mindsthetics
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          textAlign: 'center',
          maxWidth: 300,
        }}
      >
        Loading your premium aesthetic experience...
      </Typography>
    </Box>
  );
};

export default Loading;
