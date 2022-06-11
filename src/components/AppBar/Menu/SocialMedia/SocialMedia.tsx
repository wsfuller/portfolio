import React from 'react';
import { FaMedium, FaStackOverflow, FaGithub, FaLinkedin } from 'react-icons/fa';

import StyledSocialMedia from './SocialMedia.styles';
import ActionButton from '../../ActionButton';

const SocialMedia = () => {
  const socialMediaItems = [
    {
      name: 'GitHub',
      href: 'https://github.com/wsfuller',
      icon: <FaGithub />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/wsfuller-dev/',
      icon: <FaLinkedin />,
    },
    {
      name: 'Stack Overflow',
      href: 'https://stackoverflow.com/users/3060325/wsfuller?tab=profile',
      icon: <FaStackOverflow />,
    },
    {
      name: 'Medium',
      href: 'https://medium.com/@wsfuller',
      icon: <FaMedium />,
    },
  ];

  return (
    <StyledSocialMedia>
      {socialMediaItems.map(({ name, href, icon }) => (
        <li key={name}>
          <ActionButton as="a" anchorAttributes={{ href }}>
            {icon}
          </ActionButton>
        </li>
      ))}
    </StyledSocialMedia>
  );
};

export default SocialMedia;
