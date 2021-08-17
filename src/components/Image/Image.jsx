import React from 'react';
import PropTypes from 'prop-types';

import ImageStyles from './Image.styles';

const Image = ({ customClass, src, alt }) => {
  const classes = ImageStyles();
  const { image } = classes;

  // return <img className={`${image}  ${customClass}`} src={src} alt={alt} />;
  return <div>image</div>;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

Image.defaultProps = {
  customClass: '',
};

export default Image;
