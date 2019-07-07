import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

import CompanyData from './list-data';
import Image from '../Image';

const useStyles = makeStyles(theme => ({
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

const CompaniesList = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.companies}>
      {CompanyData.map(company => (
        <Grid item xs key={company.name}>
          <Tooltip title={company.name} disableTouchListener>
            <div className={classes.company}>
              <Image src={company.image} alt={`${company.name} logo`} />
            </div>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  );
};

export default CompaniesList;
