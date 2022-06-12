import React from 'react';

import StyledActionButton from './ActionButton.styles';
import type ButtonProps from './ActionButton.props';

const ActionButton: React.FC<ButtonProps> = ({
  children,
  as = 'button',
  onClick = undefined,
  anchorAttributes = undefined,
}) => (
  <StyledActionButton as={as} onClick={onClick} href={anchorAttributes?.href}>
    {children}
  </StyledActionButton>
);

export default ActionButton;
