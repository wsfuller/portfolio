import {
  DefaultTheme,
  ThemeFoundations,
  Breakpoints,
  Grayscale,
  Branding,
} from 'styled-components';

const breakpoints: Breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  xxLarge: 1400,
};

const grayscale: Grayscale = {
  gray0: '#000000',
  gray100: '#191919',
  gray200: '#333333',
  gray300: '#4c4c4c',
  gray400: '#666666',
  gray500: '#7f7f7f',
  gray600: '#999999',
  gray700: '#b2b2b2',
  gray800: '#cccccc',
  gray900: '#e5e5e5',
  gray950: '#f2f2f2',
  gray1000: '#ffffff',
};

const branding: Branding = {
  primaryMinus350: '#227474',
  primaryMinus300: '#257d7d',
  primaryMinus200: '#2c9a9a',
  primaryMinus100: '#32adad',
  primary0: '#35b3b3',
  primaryPlus100: '#4bc6c6',
  primaryPlus200: '#5Fcdcd',
};

const baseUnit = 4;
// Default is 16 to represent default font size setting in Chrome
const baseFontSize = baseUnit * 4;

export const themeFoundations: ThemeFoundations = {
  baseFontSize,
  baseUnit,
  breakpoints,
  maxContentWidth: 1200,
  appBarHeight: '3rem',
  colors: {
    grayscale,
    branding,
  },
  typography: {
    primary: {
      family: "'Roboto', sans-serif",
      weights: {
        default: 100,
      },
    },
    alternate: {
      family: "'Roboto Slab', serif",
      weights: {
        default: 100,
      },
    },
  },
  baseUnitsToRem: (value: number) => `${(value * baseUnit) / baseFontSize}rem`,
  pxToRem: (value: number) => `${value / baseFontSize}rem`,
};

export const darkTheme: DefaultTheme = {
  mode: 'dark',
  tokens: themeFoundations,
  body: grayscale.gray100,
  color: grayscale.gray1000,
};

export const lightTheme: DefaultTheme = {
  mode: 'light',
  tokens: themeFoundations,
  body: grayscale.gray1000,
  color: grayscale.gray100,
};
