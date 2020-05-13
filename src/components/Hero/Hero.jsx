import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxBanner } from 'react-scroll-parallax';

import HeroStyles from './Hero.styles';

const Hero = ({ backgroundImage, content }) => {
  const classes = HeroStyles();
  const { heroParallaxBanner, heroOverlay } = classes;

  return (
    <ParallaxBanner
      className={heroParallaxBanner}
      layers={[
        {
          image: backgroundImage,
          amount: 0.1,
          slowerScrollRate: false
        }
      ]}
    >
      <div className={heroOverlay}>{content}</div>
    </ParallaxBanner>
  );
};

Hero.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]).isRequired,
  backgroundImage: PropTypes.string.isRequired
};

export default Hero;
