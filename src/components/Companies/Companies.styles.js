import { makeStyles } from '@material-ui/core/styles';

const CompaniesStyles = makeStyles(theme => ({
  companies: {
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
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
