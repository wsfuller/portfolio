import { makeStyles } from '@material-ui/core/styles';

const FooterStyles = makeStyles(theme => ({
  footer: {
    paddingTop: theme.pxToRem(60),
    paddingBottom: theme.pxToRem(60),
    background: theme.colors.grayScale.grayFive
  },
  heart: {
    position: 'relative',
    top: theme.pxToRem(4),
    color: theme.palette.error.main,
    margin: `0 ${theme.pxToRem(8)}`
  },
  copyright: {
    marginRight: theme.pxToRem(2)
  }
}));

export default FooterStyles;
