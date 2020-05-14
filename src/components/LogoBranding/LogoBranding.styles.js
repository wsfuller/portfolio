import { makeStyles } from '@material-ui/core/styles';

const LogoBrandingStyles = makeStyles(theme => ({
  branding: {
    display: 'inline-flex',
    alignItems: 'flex-start'
  },
  logo: {
    maxWidth: theme.pxToRem(40),
    marginRight: theme.pxToRem(16)
  },
  textBox: {
    height: theme.pxToRem(40),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: theme.colors.grayScale.white
  },
  title: {
    fontSize: 20,
    lineHeight: 1
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 1
  }
}));

export default LogoBrandingStyles;
