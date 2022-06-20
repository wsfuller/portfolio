import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.tokens.colors.branding.primaryMinus100};
`;

export default StyledLink;
