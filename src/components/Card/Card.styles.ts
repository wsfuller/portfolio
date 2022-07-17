import styled from 'styled-components';

const StyledCard = styled.div`
  width: 100%;
  height: auto;
  padding: ${({ theme }) => theme.utils.baseUnitsToRem(4)};
  border-radius: ${({ theme }) => theme.tokens.borderRadius.medium};
  background: ${({ theme }) => theme.tokens.colors.grayscale.gray200};
  box-shadow: ${({ theme }) => `0px 10px 20px 0px ${theme.tokens.colors.grayscale.gray0}`};
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const StyledIcon = styled.div`
  font-size: 28px;
`;

const StyledTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.utils.baseUnitsToRem(2)};
  font-family: ${({ theme }) => theme.tokens.typography.alternate?.family};
  font-size: 24px;
`;

const StyledDescription = styled.p`
  font-size: 16px;
`;

const StyledToolList = styled.ul`
  display: flex;
  width: 100%;
  font-family: ${({ theme }) => theme.tokens.typography.alternate?.family};
  font-size: 10px;

  @media screen and (min-width: ${({ theme }) => `${theme.tokens.breakpoints.large}px`}) {
    font-size: ${({ theme }) => theme.utils.baseUnitsToRem(3)};
  }

  li {
    margin-right: ${({ theme }) => theme.utils.baseUnitsToRem(2)};
    &:last-child {
      margin-right: 0;
    }
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  a {
    color: ${({ theme }) => theme.tokens.colors.branding.primary0};
    font-size: ${({ theme }) => theme.utils.baseUnitsToRem(5)};

    &:first-child {
      margin-right: ${({ theme }) => theme.utils.baseUnitsToRem(2)};
    }
  }
`;

export {
  StyledCard,
  StyledHeader,
  StyledIcon,
  StyledTitle,
  StyledDescription,
  StyledToolList,
  StyledFooter,
};
