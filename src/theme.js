import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const pxToRem = value => `${value / 16}rem`;

const breakpoints = createBreakpoints({});

const colors = {
  primary: {
    default: '#35b3b3',
    light: '#64d1d1',
    dark: '#247878'
  },
  grayScale: {
    white: '#ffffff',
    grayOne: '#f4f4f4',
    grayTwo: '#666666',
    grayThree: '#333333',
    grayFour: '#303030',
    black: '#000000'
  }
};

const appTheme = {
  colors: {
    ...colors
  },
  palette: {
    type: 'dark',
    primary: {
      main: colors.primary.default
    },
    error: {
      main: '#dd6973'
    }
  },
  pxToRem,
  typography: {},
  link: {
    color: colors.primary.default,
    marginLeft: 5,
    marginRight: 5,
    textDecoration: 'none'
  },
  paper: {
    backgroundColor: '#ffffff'
  },
  section: {
    paddingTop: pxToRem(40),
    paddingBottom: pxToRem(40),
    [breakpoints.up('md')]: {
      paddingTop: pxToRem(80),
      paddingBottom: pxToRem(80)
    }
  },
  borderRadius: {
    default: pxToRem(8),
    small: pxToRem(4),
    rounded: '50%'
  },
  branding: {
    title: {
      fontSize: pxToRem(20),
      lineHeight: 1
    },
    subtitle: {
      fontSize: pxToRem(12),
      lineHeight: 1
    }
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: pxToRem(48),
        [breakpoints.up('sm')]: {
          fontSize: pxToRem(48)
        },
        [breakpoints.up('md')]: {
          fontSize: pxToRem(48)
        },
        [breakpoints.up('lg')]: {
          fontSize: pxToRem(60)
        }
      },
      h2: {
        fontSize: pxToRem(36),
        [breakpoints.up('sm')]: {
          fontSize: pxToRem(48)
        },
        [breakpoints.up('md')]: {
          fontSize: pxToRem(48)
        },
        [breakpoints.up('lg')]: {
          fontSize: pxToRem(60)
        }
      }
    },
    MuiAppBar: {
      colorPrimary: {
        color: colors.grayScale.grayOne,
        backgroundColor: colors.grayScale.grayThree
      }
    }
  }
};

const theme = createMuiTheme(appTheme);

export default theme;
