import React from 'react';

import Grid from '@material-ui/core/Grid';

import socialNetworks from './socialNetworkData';
import SocialNetworkList from './SocialNetworkList';
import SocialNetworkStyles from './SocialNetwork.styles';

const SocialList = () => {
  const classes = SocialNetworkStyles();
  const { container } = classes;
  return (
    <Grid container className={container}>
      <SocialNetworkList networks={socialNetworks} />
    </Grid>
  );
};

export default SocialList;
