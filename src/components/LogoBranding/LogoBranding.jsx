import React from 'react';

import Image from '../Image';
import Logo from '../../assets/images/logo/logo.svg';
import LogoBrandingStyles from './LogoBranding.styles';

const Branding = () => {
  const classes = LogoBrandingStyles();
  const { branding, logo, textBox, title, subtitle } = classes;

  return (
    <div className={branding}>
      <Image customClass={logo} src={Logo} alt="WSF Logo" />
      <span className={textBox}>
        <div className={title}>William S Fuller</div>
        <div className={subtitle}>Front End Engineer</div>
      </span>
    </div>
  );
};

export default Branding;
