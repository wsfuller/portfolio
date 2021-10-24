import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

import DevToolsStyles from './DevTools.styles';

const DevToolsList = ({ tools }) => {
  const classes = DevToolsStyles();
  const { toolsIcon } = classes;

  return (
    <Grid container spacing={3}>
      {tools.map(tool => (
        <Grid item xs={3} key={tool.name}>
          <Tooltip title={tool.name} disableTouchListener>
            <div className={toolsIcon}>{tool.icon}</div>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  );
};

DevToolsList.propTypes = {
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.shape({})
    })
  ).isRequired
};

export default DevToolsList;
