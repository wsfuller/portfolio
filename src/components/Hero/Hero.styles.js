import { makeStyles } from '@material-ui/core/styles';

const HeroStyles = makeStyles(theme => ({
  heroParallaxBanner: {
    height: `${theme.pxToRem(400)} !important`,
    [theme.breakpoints.up('md')]: {
      height: `${theme.pxToRem(600)} !important`
    },
    [theme.breakpoints.up('lg')]: {
      height: `${theme.pxToRem(800)} !important`
    }
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1
  },
  heroOverlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10
  }
}));

export default HeroStyles;
