import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import mapOptions from './map-options';

const useStyles = theme => ({
  map: {
    height: theme.pxToRem(300),
    margin: `${theme.pxToRem(32)} auto`,
    [theme.breakpoints.up('md')]: {
      height: theme.pxToRem(400)
    },
    [theme.breakpoints.up('lg')]: {
      height: theme.pxToRem(500)
    },
    '& .gm-style div:first-child': {
      cursor: 'default !important'
    },
    '& .gmnoprint, .gm-style-cc': {
      display: 'none'
    }
  }
});

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 47.6062,
        lng: -122.3321
      },
      zoom: 12
    };
  }

  render() {
    const { center, zoom } = this.state;
    const {
      classes: { map }
    } = this.props;

    return (
      <div className={map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_KEY}` }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={mapOptions}
        />
      </div>
    );
  }
}

GoogleMap.propTypes = {
  classes: PropTypes.shape({
    map: PropTypes.string
  }).isRequired
};

export default withStyles(useStyles)(GoogleMap);
