import React from 'react';

import Grid from '@material-ui/core/Grid';

import CompaniesData from './companiesData';
import CompaniesStyles from './Companies.styles';
import CompaniesList from './CompaniesList';

const Companies = () => {
  const classes = CompaniesStyles();
  const { companies } = classes;

  return (
    <Grid container spacing={3} className={companies}>
      <CompaniesList companies={CompaniesData} />
    </Grid>
  );
};

export default Companies;
