import React from 'react';

import type { AnchorAttributes } from '../../Link';

type ActionButtonProps = {
  children: React.ReactNode;
  /** Determine HTML element to render. Default: 'button' */
  as?: 'a' | 'button';
  /** Use when 'as' === 'button' */
  onClick?: () => void;
  /** Use when 'as' === 'a' */
  anchorAttributes?: AnchorAttributes;
};

export default ActionButtonProps;
