import { makeStyles } from '@material-ui/core/styles';

const SectionStyles = makeStyles(theme => ({
  section: {
    width: '100%',
    height: '100%',
    paddingTop: theme.pxToRem(40),
    paddingBottom: theme.pxToRem(40),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.pxToRem(60),
      paddingBottom: theme.pxToRem(60)
    }
  },
  container: {
    textAlign: 'center'
  },
  title: {
    display: 'flex',
    'flex-direction': 'column',
    position: 'relative'
  },
  titleUnderline: {
    width: theme.pxToRem(80),
    height: theme.pxToRem(3),
    margin: `${theme.pxToRem(8)} auto ${theme.pxToRem(40)}`,
    'background-color': theme.colors.primary.default
  }
}));

export default SectionStyles;
