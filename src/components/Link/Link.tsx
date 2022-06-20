import React from 'react';

import type { LinkProps } from './Link.props';
import StyledLink from './Link.styles';

const Link: React.FC<LinkProps> = ({ children, href, target }) => (
  <StyledLink href={href} target={target}>
    {children}
  </StyledLink>
);

export default Link;
