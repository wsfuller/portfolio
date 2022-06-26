import React from 'react';

import type { LinkProps } from './Link.props';
import StyledLink from './Link.styles';

const Link: React.FC<LinkProps> = ({ children, href, target }) => {
  const DURATION = 0.15;

  return (
    <StyledLink
      href={href}
      target={target}
      transition={{ ease: 'easeInOut', duration: DURATION }}
      whileHover={{ scale: 1.05, x: 0 }}
      whileTap={{ scale: 0.9 }}
      duration={DURATION}
    >
      {children}
    </StyledLink>
  );
};
export default Link;
