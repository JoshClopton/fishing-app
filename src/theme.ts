// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Avenir Next, sans-serif',
    body: 'Avenir Next, sans-serif',
  },
  fontStyles: {
    mobilePageHeader: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: '700',
      fontFamily: 'Avenir Next, sans-serif',
    },
    mobileSectionHeader: {
      fontSize: '0.75rem',
      lineHeight: '1.25rem',
      fontWeight: '700',
      fontFamily: 'Avenir Next, sans-serif',
    },
    mobileBody: {
      fontSize: '0.8125rem',
      lineHeight: '1.125rem',
      fontWeight: '400',
      fontFamily: 'Avenir Next, sans-serif',
    },
    labelsAndButtons: {
      fontSize: '0.75rem',
      lineHeight: '1.25rem',
      fontWeight: '700',
      fontFamily: 'Avenir Next, sans-serif',
    },
  },
});

export default theme;
