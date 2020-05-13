import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Image from '../Image';

import CompaniesStyles from './Companies.styles';

const CompaniesList = ({ companies }) => {
  const classes = CompaniesStyles();
  const { company: companyStyles } = classes;

  return companies.map(company => (
    <Grid item xs key={company.name}>
      <Tooltip title={company.name} disableTouchListener>
        <div className={companyStyles}>
          <Image src={company.image} alt={`${company.name} logo`} />
        </div>
      </Tooltip>
    </Grid>
  ));
};

CompaniesList.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string
    })
  )
};

export default CompaniesList;
