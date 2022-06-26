import styled from 'styled-components';

const StyledSocialMedia = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: ${({ theme }) => `0 0 ${theme.utils.baseUnitsToRem(4)} 0`};
  padding: 0 ${({ theme }) => theme.utils.baseUnitsToRem(4)};
  list-style: none;

  & li a {
    font-size: ${({ theme }) => theme.utils.baseUnitsToRem(5)};
  }
`;

export default StyledSocialMedia;
