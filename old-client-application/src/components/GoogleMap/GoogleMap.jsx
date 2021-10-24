import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import mapOptions from './mapOptions';
import GoogleMapStyles from './GoogleMap.styles';

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

export default withStyles(GoogleMapStyles)(GoogleMap);
