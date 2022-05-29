import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.tokens.typography.primary.family};
    color: ${({ theme }) => theme.color};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.body};
    transition: all 0.5s linear;
  }
`;

export default GlobalStyles;
