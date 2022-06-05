import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: ${({ theme }) => theme.tokens.typography.primary.family};
    font-size: ${({ theme }) => `${theme.tokens.baseFontSize}px`}
    color: ${({ theme }) => theme.color};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.body};
  }
`;

export default GlobalStyles;
