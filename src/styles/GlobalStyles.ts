import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.tokens.typography.primary.family};
    font-size: ${({ theme }) => `${theme.tokens.baseFontSize}px`};
    color: ${({ theme }) => theme.color};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.body};
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    font-weight: normal;
  }

  p {
    font-size: ${({ theme }) => theme.utils.pxToRem(14)};

    @media screen and (min-width: ${({ theme }) => `${theme.tokens.breakpoints.medium}px`}) {
      font-size: ${({ theme }) => theme.utils.pxToRem(16)};
    }

    @media screen and (min-width: ${({ theme }) => `${theme.tokens.breakpoints.large}px`}) {
      font-size: ${({ theme }) => theme.utils.pxToRem(18)};
    }
  }

  ul {
    padding: 0;
    list-style: none;
  }
`;

export default GlobalStyles;
