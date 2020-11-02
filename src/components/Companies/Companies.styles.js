import { makeStyles } from '@material-ui/core/styles';

const CompaniesStyles = makeStyles(theme => ({
  companies: {
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  companyCarousel: {
    margin: 'auto',
    '& .carousel': {
      '& .slider-wrapper': {
        height: '8rem'
      },
      '& .slide': {
        top: '.5rem',
        background: 'transparent'
      },
      '& .control-dots': {
        margin: 0
      },
      '& .control-dots .dot': {
        background: theme.colors.primary.default
      }
    }
  },
  company: {
    maxWidth: theme.pxToRem(75),
    height: theme.pxToRem(75),
    display: 'flex',
    alignItems: 'center',
    margin: 'auto'
  }
}));

export default CompaniesStyles;
