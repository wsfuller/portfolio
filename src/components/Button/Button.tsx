import React from 'react';

import ButtonProps from './Button.props';
import StyledButton from './Button.styles';

const Button: React.FC<ButtonProps> = ({
  children,
  as = 'button',
  onClick = undefined,
  anchorAttributes = undefined,
}) => (
  <StyledButton as={as} onClick={onClick} href={anchorAttributes?.href}>
    {children}
  </StyledButton>
);

export default Button;
