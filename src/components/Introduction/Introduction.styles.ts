import styled from 'styled-components';

const StyledIntroduction = styled.section`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.utils.pxToRem(600)};
  margin: auto;

  @media screen and (min-width: ${({ theme }) => `${theme.tokens.breakpoints.large}px`}) {
    max-width: ${({ theme }) => theme.utils.pxToRem(800)};
  }
`;

const StyledGreeting = styled.h2`
  margin: ${({ theme }) => `0 0 ${theme.utils.baseUnitsToRem(1)}`};
  color: ${({ theme }) =>
    theme.isDarkMode
      ? theme.tokens.colors.branding.primary0
      : theme.tokens.colors.branding.primaryMinus350};
  font-family: ${({ theme }) => theme.tokens.typography.alternate?.family};
  font-size: ${({ theme }) => theme.utils.pxToRem(12)};
  font-weight: ${({ theme }) => theme.tokens.typography.alternate?.weights.light};

  @media screen and (min-width: ${({ theme }) => `${theme.tokens.breakpoints.medium}px`}) {
    font-size: ${({ theme }) => theme.utils.pxToRem(28)};
  }
`;

const StyledName = styled.h1`
  margin-bottom: ${({ theme }) => theme.utils.baseUnitsToRem(1)};
  font-size: ${({ theme }) => theme.utils.pxToRem(36)};
  font-weight: ${({ theme }) => theme.tokens.typography.primary.weights.normal};
  opacity: 0.7;

  @media screen and (min-width: ${({ theme }) => `${theme.tokens.breakpoints.medium}px`}) {
    font-size: ${({ theme }) => theme.utils.pxToRem(56)};
  }
`;

const StyledTagline = styled.h3`
  margin-bottom: ${({ theme }) => theme.utils.baseUnitsToRem(4)};

  @media screen and (min-width: ${({ theme }) => `${theme.tokens.breakpoints.medium}px`}) {
    font-size: ${({ theme }) => theme.utils.pxToRem(32)};
  }
`;

const StyledBody = styled.p`
  max-width: ${({ theme }) => theme.utils.pxToRem(400)};
  line-height: ${({ theme }) => theme.utils.pxToRem(28)};
`;

export { StyledIntroduction, StyledGreeting, StyledName, StyledTagline, StyledBody };
