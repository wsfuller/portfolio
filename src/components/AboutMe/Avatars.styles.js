import { makeStyles } from '@material-ui/core/styles';

const AvatarsStyles = makeStyles(theme => ({
  avatarImages: {
    width: theme.pxToRem(175),
    height: theme.pxToRem(175),
    position: 'relative',
    margin: `0 auto ${theme.pxToRem(32)}`,
    [theme.breakpoints.up('md')]: {
      width: theme.pxToRem(250),
      height: theme.pxToRem(250)
    }
  },
  primaryImage: {
    width: theme.pxToRem(175),
    height: theme.pxToRem(175),
    border: `${theme.pxToRem(5)} solid ${theme.colors.grayScale.white}`,
    borderRadius: theme.borderRadius.rounded,
    boxShadow: `0 ${theme.pxToRem(5)} ${theme.pxToRem(10)} 0 rgba(0,0,0,.5)`,
    [theme.breakpoints.up('md')]: {
      width: theme.pxToRem(250),
      height: theme.pxToRem(250)
    }
  },
  secondaryImage: {
    width: theme.pxToRem(100),
    height: theme.pxToRem(100),
    position: 'absolute',
    top: theme.pxToRem(75),
    left: theme.pxToRem(-45),
    border: `${theme.pxToRem(5)} solid ${theme.colors.grayScale.white}`,
    borderRadius: theme.borderRadius.rounded,
    boxShadow: `0 ${theme.pxToRem(5)} ${theme.pxToRem(10)} 0 rgba(0,0,0,.5)`,
    [theme.breakpoints.up('md')]: {
      width: theme.pxToRem(125),
      height: theme.pxToRem(125),
      top: theme.pxToRem(125),
      left: theme.pxToRem(-60)
    }
  }
}));

export default AvatarsStyles;
