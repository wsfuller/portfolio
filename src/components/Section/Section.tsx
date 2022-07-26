import React from 'react';

import SectionProps from './Section.props';
import { StyledSection, StyledTitle } from './Section.styles';

const Section: React.FC<SectionProps> = ({ children, title, testid }) => (
  <StyledSection data-testid={testid}>
    <StyledTitle>
      <h2>{title}</h2>
    </StyledTitle>
    {children}
  </StyledSection>
);

export default Section;
