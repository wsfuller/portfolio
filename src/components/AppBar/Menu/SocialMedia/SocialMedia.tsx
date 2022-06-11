import React from 'react';
import { FaMedium, FaStackOverflow, FaGithub, FaLinkedin } from 'react-icons/fa';

import StyledSocialMedia from './SocialMedia.styles';
import ActionButton from '../../ActionButton';

const SocialMedia = () => (
  <StyledSocialMedia>
    <li>
      <ActionButton as="a" anchorAttributes={{ href: 'https://github.com/wsfuller' }}>
        <FaGithub />
      </ActionButton>
    </li>
    <li>
      <ActionButton as="a" anchorAttributes={{ href: 'https://www.linkedin.com/in/wsfuller-dev/' }}>
        <FaLinkedin />
      </ActionButton>
    </li>
    <li>
      <ActionButton
        as="a"
        anchorAttributes={{ href: 'https://stackoverflow.com/users/3060325/wsfuller?tab=profile' }}
      >
        <FaStackOverflow />
      </ActionButton>
    </li>
    <li>
      <ActionButton as="a" anchorAttributes={{ href: 'https://medium.com/@wsfuller' }}>
        <FaMedium />
      </ActionButton>
    </li>
  </StyledSocialMedia>
);

export default SocialMedia;
