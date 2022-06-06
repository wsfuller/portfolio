import 'styled-components';

declare module 'styled-components' {
  export interface Breakpoints {
    small: number;
    medium: number;
    large: number;
    xLarge: number;
    xxLarge: number;
  }

  export interface TransitionSpeeds {
    xFast: string;
    fast: string;
    default: string;
    slow: string;
    xSlow: string;
  }

  export interface BorderRadius {
    small: string;
    // Default
    medium: string;
    large: string;
    round: string;
  }

  export interface ZIndex {
    zero: number;
    one: number;
    two: number;
    three: number;
    four: number;
    five: number;
    six: number;
    seven: number;
    eight: number;
    nine: number;
    ten: number;
    max: number;
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
      thin?: number;
      light?: number;
      normal: number;
      semiBold?: number;
      bold?: number;
    };
  }

  export interface ThemeFoundations {
    baseFontSize: number;
    baseUnit: number;
    breakpoints: Breakpoints;
    transitionSpeeds: TransitionSpeeds;
    borderRadius: BorderRadius;
    zIndex: ZIndex;
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
    // Simplify theme base unit conversion to relative units
    baseUnitsToRem: (value: number) => string;
  }

  export interface DefaultTheme {
    mode: string;
    isDarkMode: boolean;
    tokens: ThemeFoundations;
    body: string;
    color: string;
  }
}
