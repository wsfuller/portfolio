import styled from 'styled-components';

const StyledSocialMedia = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.tokens.baseUnitsToRem(8)};
  padding: 0 ${({ theme }) => theme.tokens.baseUnitsToRem(4)};
  list-style: none;

  & li a {
    font-size: ${({ theme }) => theme.tokens.baseUnitsToRem(5)};
  }
`;

export default StyledSocialMedia;
