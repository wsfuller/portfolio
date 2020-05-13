import { makeStyles } from '@material-ui/core/styles';

const AboutMeStyles = makeStyles(theme => ({
  container: {
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  timeline: {
    order: 3,
    [theme.breakpoints.up('sm')]: {
      order: 1
    }
  },
  contentDivider: {
    display: 'flex',
    alignItems: 'center',
    order: 2,
    marginBottom: theme.pxToRem(32)
  },
  divider: {
    width: '100%',
    height: theme.pxToRem(1),
    margin: 'auto',
    background: theme.colors.primary.default,
    opacity: '.25',
    [theme.breakpoints.up('sm')]: {
      width: theme.pxToRem(1),
      height: '100%'
    }
  },
  aboutMe: {
    order: 1,
    [theme.breakpoints.up('sm')]: {
      order: 3
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  listDivider: {
    width: theme.pxToRem(250),
    height: theme.pxToRem(2),
    margin: `${theme.pxToRem(16)} auto 0`,
    background: theme.colors.primary.default
  },
  resumeButton: {
    margin: `${theme.pxToRem(32)} auto`,
    color: theme.colors.grayScale.white
  }
}));

export default AboutMeStyles;
