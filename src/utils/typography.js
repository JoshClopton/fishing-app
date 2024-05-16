// src/utils/typography.js
import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';

fairyGatesTheme.headerFontFamily = [
  'Avenir Next',
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
];
fairyGatesTheme.bodyFontFamily = [
  'Avenir Next',
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
];

const typography = new Typography(fairyGatesTheme);

// Hot reload typography in development.
typography.injectStyles();

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
