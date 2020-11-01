import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import theme from './theme';
import App from './components/App';
import GoogleAnalytics from './components/GoogleAnalytics';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <GoogleAnalytics trackingId="UA-33461307-5">
        <ParallaxProvider>
          <Fragment>
            <CssBaseline />
            <App />
          </Fragment>
        </ParallaxProvider>
      </GoogleAnalytics>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);
