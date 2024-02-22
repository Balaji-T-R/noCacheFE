import React from 'react';
import HomePage from './HomePage/HomePage';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const Module = () => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Nunito',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Module;
