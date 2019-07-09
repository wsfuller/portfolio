import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import tools from './data';

const useStyles = makeStyles(theme => ({
  toolsIcon: {
    fontSize: theme.pxToRem(32)
  }
}));

const DevTools = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs>
        <div className={classes.aboutMe}>
          <Typography variant="h4" gutterBottom>
            Tools
          </Typography>
          <Grid container spacing={3}>
            {tools.map(tool => (
              <Grid item xs={3} key={tool.name}>
                <Tooltip title={tool.name} disableTouchListener>
                  <div className={classes.toolsIcon}>{tool.icon}</div>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default DevTools;
