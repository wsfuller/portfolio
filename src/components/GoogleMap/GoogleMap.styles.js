const GoogleMapStyles = theme => ({
  map: {
    height: theme.pxToRem(300),
    margin: `${theme.pxToRem(32)} auto`,
    [theme.breakpoints.up('md')]: {
      height: theme.pxToRem(400)
    },
    [theme.breakpoints.up('lg')]: {
      height: theme.pxToRem(500)
    },
    '& .gm-style div:first-child': {
      cursor: 'default !important'
    },
    '& .gmnoprint, .gm-style-cc': {
      display: 'none'
    }
  }
});

export default GoogleMapStyles;
