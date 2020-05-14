import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

const SocialNetworkList = ({ networks }) => {
  return networks.map(network => (
    <Grid item xs key={network.name}>
      <IconButton href={network.url} aria-label={network.name}>
        {network.icon}
      </IconButton>
    </Grid>
  ));
};

SocialNetworkList.propTypes = {
  networks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired
};

export default SocialNetworkList;
