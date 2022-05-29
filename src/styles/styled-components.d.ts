import 'styled-components';

declare module 'styled-components' {
  export interface Breakpoints {
    small: number;
    medium: number;
    large: number;
    xLarge: number;
    xxLarge: number;
  }

  export interface Grayscale {
    gray0: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;
    gray950: string;
    gray1000: string;
  }

  export interface Branding {
    primaryMinus350: string;
    primaryMinus300: string;
    primaryMinus200: string;
    primaryMinus100: string;
    primary0: string;
    primaryPlus100: string;
    primaryPlus200: string;
  }

  export interface Typography {
    family: string;
    weights: {
      default: number;
    };
  }

  export interface ThemeFoundations {
    baseUnit: number;
    breakpoints: Breakpoints;
    maxContentWidth: number;
    appBarHeight: string;
    colors: {
      grayscale: Grayscale;
      branding: Branding;
    };
    typography: {
      primary: Typography;
      alternate?: Typography;
    };
    pxToRem: (value: number) => string;
  }

  export interface DefaultTheme {
    mode: string;
    tokens: ThemeFoundations;
    body: string;
    color: string;
  }
}
