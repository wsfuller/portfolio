import styled from 'styled-components';

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  padding: ${({ theme }) => `${theme.utils.baseUnitsToRem(10)} 0`};
`;

const StyledTitle = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: ${({ theme }) => theme.utils.baseUnitsToRem(4)};
  font-family: ${({ theme }) => theme.tokens.typography.alternate?.family};
  font-weight: ${({ theme }) => theme.tokens.typography.alternate?.weights.light};

  @media screen and (min-width: ${({ theme }) => `${theme.tokens.breakpoints.medium}px`}) {
    margin-bottom: ${({ theme }) => theme.utils.baseUnitsToRem(8)};
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    z-index: ${({ theme }) => theme.tokens.zIndex.one};
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.tokens.colors.grayscale.gray500};
    opacity: 0.25;
  }

  h2 {
    position: relative;
    z-index: ${({ theme }) => theme.tokens.zIndex.two};
    width: min-content;
    padding-right: ${({ theme }) => theme.utils.baseUnitsToRem(2)};
    font-size: ${({ theme }) => theme.utils.baseUnitsToRem(5)};
    background: ${({ theme }) => theme.body};

    @media screen and (min-width: ${({ theme }) => `${theme.tokens.breakpoints.medium}px`}) {
      font-size: ${({ theme }) => theme.utils.baseUnitsToRem(8)};
    }
  }
`;

export { StyledSection, StyledTitle };
