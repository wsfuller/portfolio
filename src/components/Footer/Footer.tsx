import React from 'react';
import { FaHeart } from 'react-icons/fa';

import StyledFooter from './Footer.styles';

const Footer: React.FC = () => (
  <StyledFooter>
    Made with
    <FaHeart />
    <span>&copy;</span>
    {new Date().getFullYear()}
  </StyledFooter>
);

export default Footer;
