import { makeStyles } from '@material-ui/core/styles';

const useMetricStyles = makeStyles(theme => ({
  root: {
    display: 'inline-flex',
    position: 'relative',
    marginBottom: theme.pxToRem(theme.spacing(1))
  },
  innerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}));

export default useMetricStyles;
