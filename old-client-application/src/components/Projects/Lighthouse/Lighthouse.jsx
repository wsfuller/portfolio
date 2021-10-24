import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';

import Metric from '../Metric';

const Lighthouse = ({ metrics }) => {
  const { lighthouse } = metrics;

  return (
    <Grid container direction="column" alignItems="center" spacing={3}>
      <Grid item>
        <Tooltip
          title="Lighthouse is an open-source, automated tool for improving the quality of web pages. You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO and more."
          placement="bottom"
        >
          <Typography variant="h6" component="div" color="textSecondary">
            Google Lighthouse
          </Typography>
        </Tooltip>
      </Grid>
      <Grid container alignItems="center" justify="center" spacing={3}>
        <Grid item>
          <Metric value={lighthouse.performance} label="Performance" />
        </Grid>
        <Grid item>
          <Metric value={lighthouse.accessibility} label="Accessibility" />
        </Grid>
        <Grid item>
          <Metric value={lighthouse.bestPractices} label="Best Practices" />
        </Grid>
        <Grid item>
          <Metric value={lighthouse.seo} label="SEO" />
        </Grid>
      </Grid>
    </Grid>
  );
};

Lighthouse.propTypes = {
  metrics: PropTypes.shape({
    lighthouse: PropTypes.shape({
      performance: PropTypes.number,
      accessibility: PropTypes.number,
      bestPractices: PropTypes.number,
      seo: PropTypes.number
    })
  }).isRequired
};

export default Lighthouse;
