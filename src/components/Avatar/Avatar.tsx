import React from 'react';

import AvatarProps from './Avatar.props';
import StyledAvatar from './Avatar.styles';

const Avatar: React.FC<AvatarProps> = ({
  src,
  srcSet = '',
  alt,
  width = '6rem',
  height = '6rem',
}) => <StyledAvatar src={src} srcSet={srcSet} alt={alt} width={width} height={height} />;

export default Avatar;
