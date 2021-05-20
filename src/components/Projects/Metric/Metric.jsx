import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useMetricStyles from './Metric.styles';

const Metric = ({ value, label }) => {
  const { root, innerBox } = useMetricStyles();

  return (
    <Grid container direction="column" alignItems="center">
      <Box className={root} position="relative" display="inline-flex">
        <CircularProgress variant="static" value={value} size={80} thickness={4} />
        <Box className={innerBox}>
          <Typography variant="h6">{value}</Typography>
        </Box>
      </Box>
      <Typography variant="caption">{label}</Typography>
    </Grid>
  );
};

Metric.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
};

export default Metric;
