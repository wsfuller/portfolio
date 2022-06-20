import styled from 'styled-components';

const StyledIntroduction = styled.section`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.tokens.pxToRem(600)};
  margin: auto;

  @media screen and (min-width: ${({ theme }) => `${theme.tokens.breakpoints.large}px`}) {
    max-width: ${({ theme }) => theme.tokens.pxToRem(800)};
  }
`;

const StyledGreeting = styled.h2`
  margin: ${({ theme }) => `0 0 ${theme.tokens.baseUnitsToRem(1)}`};
  color: ${({ theme }) =>
    theme.isDarkMode
      ? theme.tokens.colors.branding.primary0
      : theme.tokens.colors.branding.primaryMinus350};
  font-family: ${({ theme }) => theme.tokens.typography.alternate?.family};
  font-size: ${({ theme }) => theme.tokens.pxToRem(12)};
  font-weight: ${({ theme }) => theme.tokens.typography.alternate?.weights.light};

  @media screen and (min-width: ${({ theme }) => `${theme.tokens.breakpoints.medium}px`}) {
    font-size: ${({ theme }) => theme.tokens.pxToRem(28)};
  }
`;

const StyledName = styled.h1`
  margin-bottom: ${({ theme }) => theme.tokens.baseUnitsToRem(1)};
  font-size: ${({ theme }) => theme.tokens.pxToRem(36)};
  font-weight: ${({ theme }) => theme.tokens.typography.primary.weights.normal};
  opacity: 0.7;

  @media screen and (min-width: ${({ theme }) => `${theme.tokens.breakpoints.medium}px`}) {
    font-size: ${({ theme }) => theme.tokens.pxToRem(56)};
  }
`;

const StyledTagline = styled.h3`
  margin-bottom: ${({ theme }) => theme.tokens.baseUnitsToRem(4)};

  @media screen and (min-width: ${({ theme }) => `${theme.tokens.breakpoints.medium}px`}) {
    font-size: ${({ theme }) => theme.tokens.pxToRem(32)};
  }
`;

const StyledBody = styled.p`
  max-width: ${({ theme }) => theme.tokens.pxToRem(400)};
  line-height: ${({ theme }) => theme.tokens.pxToRem(28)};
`;

export { StyledIntroduction, StyledGreeting, StyledName, StyledTagline, StyledBody };
