import React from 'react';
import PropTypes from 'prop-types';

import { Carousel } from 'react-responsive-carousel';

import { useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Image from '../Image';

import CompaniesStyles from './Companies.styles';

import useWindowDimensions from '../WindowDimensions';

const CompaniesList = ({ companies }) => {
  const classes = CompaniesStyles();
  const { company: companyStyles, companyCarousel } = classes;
  const theme = useTheme();
  const { width } = useWindowDimensions();

  let content;

  if (width > theme.breakpoints.values.sm) {
    content = companies.map(company => (
      <Grid item xs key={company.name}>
        <Tooltip title={company.name} disableTouchListener>
          <div className={companyStyles}>
            <Image src={company.image.default} alt={`${company.name} logo`} />
          </div>
        </Tooltip>
      </Grid>
    ));
  } else {
    content = (
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        className={companyCarousel}
      >
        {companies.map(company => (
          <div key={company.name}>
            <div className={companyStyles}>
              <Image src={company.image.default} alt={`${company.name} logo`} />
            </div>
          </div>
        ))}
      </Carousel>
    );
  }

  return content;
};

CompaniesList.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.shape({
        default: PropTypes.string
      })
    }).isRequired
  )
};

export default CompaniesList;
