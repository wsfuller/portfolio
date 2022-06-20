import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => `${theme.tokens.maxContentWidth}px`};
  height: auto;
  margin: auto;
  padding: 0 ${({ theme }) => theme.tokens.baseUnitsToRem(4)};
`;

export default StyledContainer;
