import React from 'react';

import { StyledBranding, StyledLogo, StyledName, StyledTag } from './Branding.styles';

import logo from '../../../../assets/images/logo/logo.svg';

const Branding: React.FC = () => (
  <StyledBranding>
    <StyledLogo src={logo} alt="WSF Logo" />
    <StyledName>
      William S Fuller <StyledTag>Software Engineer</StyledTag>
    </StyledName>
  </StyledBranding>
);

export default Branding;
