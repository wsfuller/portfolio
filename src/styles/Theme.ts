import {
  DefaultTheme,
  ThemeFoundations,
  Breakpoints,
  TransitionSpeeds,
  ZIndex,
  BorderRadius,
  Grayscale,
  Branding,
} from 'styled-components';

const baseUnit = 4;
// Default is 16 to represent default font size setting in Chrome
const baseFontSize = baseUnit * 4;
const baseUnitsToRem = (value: number): string => `${(value * baseUnit) / baseFontSize}rem`;
const pxToRem = (value: number): string => `${value / baseFontSize}rem`;

const breakpoints: Breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  xxLarge: 1400,
};

const transitionSpeeds: TransitionSpeeds = {
  xSlow: '750ms',
  slow: '500ms',
  default: '350ms',
  fast: '250ms',
  xFast: '150ms',
};

const borderRadius: BorderRadius = {
  small: baseUnitsToRem(1),
  medium: baseUnitsToRem(2),
  large: baseUnitsToRem(3),
  round: '100%',
};

const zIndex: ZIndex = {
  zero: 0,
  one: 10,
  two: 20,
  three: 30,
  four: 40,
  five: 50,
  six: 60,
  seven: 70,
  eight: 80,
  nine: 90,
  ten: 100,
  max: 1000,
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

export const themeFoundations: ThemeFoundations = {
  baseFontSize,
  baseUnit,
  breakpoints,
  transitionSpeeds,
  borderRadius,
  zIndex,
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
        light: 300,
        normal: 400,
      },
    },
    alternate: {
      family: "'Roboto Slab', serif",
      weights: {
        normal: 100,
      },
    },
  },
  baseUnitsToRem,
  pxToRem,
};

export const darkTheme: DefaultTheme = {
  mode: 'dark',
  isDarkMode: true,
  tokens: themeFoundations,
  body: grayscale.gray100,
  color: grayscale.gray1000,
};

export const lightTheme: DefaultTheme = {
  mode: 'light',
  isDarkMode: false,
  tokens: themeFoundations,
  body: grayscale.gray1000,
  color: grayscale.gray100,
};
