import styled from 'styled-components';

const StyledAppBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${({ theme }) => theme.tokens.appBarHeight};
  padding: 0 ${({ theme }) => theme.tokens.baseUnitsToRem(4)};
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.body};
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
