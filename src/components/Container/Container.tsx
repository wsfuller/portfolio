import React from 'react';

import ContainerProps from './Container.props';
import StyledContainer from './Container.styles';

/** The container centers your content horizontally. It's the most basic layout element. */
const Container: React.FC<ContainerProps> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
