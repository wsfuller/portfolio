import React from 'react';

import StyledActionButton from './ActionButton.styles';
import type ButtonProps from './ActionButton.props';

const ActionButton: React.FC<ButtonProps> = ({ children, onClick }) => (
  <StyledActionButton onClick={onClick}>{children}</StyledActionButton>
);

export default ActionButton;
