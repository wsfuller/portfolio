import styled from 'styled-components';
import { motion } from 'framer-motion';

import type { StyledLinkProps } from './Link.props';

const StyledLink = styled(motion.a)<StyledLinkProps>`
  display: inline-block;
  margin: ${({ theme }) => `0 ${theme.utils.pxToRem(5)}`};
  color: ${({ theme: { tokens, isDarkMode } }) =>
    isDarkMode ? tokens.colors.branding.primaryMinus100 : tokens.colors.branding.primaryMinus350};
  text-decoration: none;
  transition: ${(props) => `color ${props.duration}s ease-in-out`};

  &:hover {
    color: ${({ theme: { tokens, isDarkMode } }) =>
      isDarkMode ? tokens.colors.branding.primaryPlus100 : tokens.colors.branding.primaryMinus100};
  }
`;

export default StyledLink;
