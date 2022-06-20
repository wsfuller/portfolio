import React from 'react';

import {
  StyledIntroduction,
  StyledGreeting,
  StyledName,
  StyledTagline,
  StyledBody,
} from './Introduction.styles';
import Link from '../Link';

const Introduction: React.FC = () => (
  <StyledIntroduction>
    <StyledGreeting>Hi, my name is</StyledGreeting>
    {/* Name */}
    <StyledName>Steve</StyledName>
    {/* Tagline */}
    <StyledTagline>and I build things for the web</StyledTagline>
    {/* Body */}
    <StyledBody>
      I&apos;m a software engineer based out of Seattle, WA. I specialize in building frontend
      applications and experiences. Currently I&apos;m a Senior Software Engineer at{' '}
      <Link href="https://ted.com" target="blank">
        TED Conferences
      </Link>
    </StyledBody>
  </StyledIntroduction>
);

export default Introduction;
