import styled from 'styled-components';

const StyledAppBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${({ theme }) => theme.tokens.appBarHeight};
  margin-bottom: ${({ theme }) => theme.tokens.baseUnitsToRem(8)};
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.body};

  @media screen and (min-width: ${({ theme }) => `${theme.tokens.breakpoints.large}px`}) {
    margin-bottom: ${({ theme }) => theme.tokens.baseUnitsToRem(16)};
  }
`;

const StyledAppBarActions = styled.div`
  display: flex;
  align-items: center;

  & button {
    margin-right: ${({ theme }) => theme.tokens.baseUnitsToRem(2)};

    &:last-child {
      margin-right: 0;
    }
  }
`;

export { StyledAppBar, StyledAppBarActions };
