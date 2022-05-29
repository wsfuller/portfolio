import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
// import GoogleAnalytics from './components/GoogleAnalytics';

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    {/* <GoogleAnalytics trackingId="UA-33461307-5"> */}
    <App />
    {/* </GoogleAnalytics> */}
  </BrowserRouter>
);
