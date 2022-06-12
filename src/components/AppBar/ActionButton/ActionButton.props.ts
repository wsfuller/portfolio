import React from 'react';

type AnchorAttributes = {
  href: string;
  /** default is '_self' */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** default is 'no-referrer-when-downgrade' */
  referrer?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';
};

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
