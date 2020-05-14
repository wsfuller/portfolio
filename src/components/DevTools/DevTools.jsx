import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import tools from './devToolsData';
import DevToolsList from './DevToolsList';

const DevTools = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <Typography variant="h4" gutterBottom>
          Tools
        </Typography>
        <DevToolsList tools={tools} />
      </Grid>
    </Grid>
  );
};

export default DevTools;
