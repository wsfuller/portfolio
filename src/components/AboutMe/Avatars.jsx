import React from 'react';
import { Picture } from 'react-responsive-picture';

import Me from '../../assets/images/about-me/me.png';
import Me2x from '../../assets/images/about-me/me@2x.png';
import Remy from '../../assets/images/about-me/remy.png';
import Remy2x from '../../assets/images/about-me/remy@2x.png';
import AvatarsStyles from './Avatars.styles';

const Avatars = () => {
  const classes = AvatarsStyles();
  const { avatarImages, primaryImage, secondaryImage } = classes;

  return (
    <div className={avatarImages}>
      <Picture
        className={primaryImage}
        src={`${Me2x} 2x, ${Me} 1x`}
        alt="Cartoon illustration of William S Fuller"
      />
      <Picture
        className={secondaryImage}
        src={`${Remy2x} 2x, ${Remy} 1x`}
        alt="Cartoon illustration of Remy my Boston Terrier"
      />
    </div>
  );
};

export default Avatars;
