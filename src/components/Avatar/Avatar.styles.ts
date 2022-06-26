import styled from 'styled-components';

const StyledAvatar = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ theme }) =>
    `${theme.utils.pxToRem(1)} solid ${theme.tokens.colors.grayscale.gray1000}`};
  border-radius: ${({ theme }) => theme.tokens.borderRadius.round};
  background: ${({ theme }) => theme.tokens.colors.grayscale.gray1000};
`;

export default StyledAvatar;
