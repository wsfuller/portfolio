import { makeStyles } from '@material-ui/core/styles';

const useDetailsStyles = makeStyles(theme => ({
  heroOverlay: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
    background: 'rgba(33,33,33, 0.8)'
  },
  heroImage: {
    width: theme.pxToRem(800),
    opacity: 0.8
  },
  responsiveImage: {
    width: '100%',
    maxWidth: theme.pxToRem(800),
    height: 'auto',
    display: 'block',
    margin: 'auto',
    borderRadius: theme.borderRadius.default,
    boxShadow: `0 ${theme.pxToRem(5)} ${theme.pxToRem(10)} 0 rgba(0,0,0,.5)`
  }
}));

export default useDetailsStyles;
