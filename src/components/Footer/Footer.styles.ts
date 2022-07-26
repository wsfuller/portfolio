import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => `${theme.utils.baseUnitsToRem(15)} 0`};
  color: ${({ theme }) => theme.color};

  svg {
    position: 'relative';
    margin: ${({ theme }) => `0 ${theme.utils.baseUnitsToRem(2)}`};
    color: ${({ theme }) => theme.tokens.colors.branding.primary0};
  }

  span {
    margin-right: ${({ theme }) => theme.utils.baseUnitsToRem(0.25)};
  }
`;

export default StyledFooter;
