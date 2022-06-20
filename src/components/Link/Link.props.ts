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

type LinkProps = {
  children: React.ReactNode;
  href: string;
  target?: string;
};

export type { AnchorAttributes, LinkProps };
