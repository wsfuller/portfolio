import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import social from './data';

const SocialList = () => (
  <Fragment>
    {social.map(item => (
      <Grid item xs key={item.name}>
        <IconButton href={item.url} aria-label={item.name}>
          {item.icon}
        </IconButton>
      </Grid>
    ))}
  </Fragment>
);

export default SocialList;
