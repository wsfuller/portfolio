import React from 'react';

import AvatarProps from './Avatar.props';
import StyledAvatar from './Avatar.styles';

/** Defaults to 6.25rem x 6.25rem (100px x 100px) */
const Avatar: React.FC<AvatarProps> = ({
  src,
  srcSet = '',
  alt,
  width = '6.25rem',
  height = '6.25rem',
}) => <StyledAvatar src={src} srcSet={srcSet} alt={alt} width={width} height={height} />;

export default Avatar;
