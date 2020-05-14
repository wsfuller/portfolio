import { makeStyles } from '@material-ui/core/styles';

const MainMenuStyles = makeStyles(theme => ({
  root: {
    width: '80vw',
    maxWidth: 320,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('md')]: {
      width: '20vw'
    }
  },
  intro: {
    textAlign: 'center'
  },
  introImage: {
    width: theme.pxToRem(125),
    height: theme.pxToRem(125),
    margin: `${theme.pxToRem(8)} auto`,
    background: theme.colors.grayScale.grayOne,
    border: `${theme.pxToRem(5)} solid ${theme.colors.grayScale.grayOne}`,
    borderRadius: theme.borderRadius.rounded
  },
  title: {
    ...theme.branding.title
  },
  subtitle: {
    ...theme.branding.subtitle
  },
  social: {
    margin: `${theme.pxToRem(8)} auto`
  },
  linkText: {
    color: theme.colors.grayScale.white,
    textDecoration: 'none'
  }
}));

export default MainMenuStyles;
