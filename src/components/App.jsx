import React, { Fragment } from 'react';

import Navbar from './Navbar';
import Routes from '../views/Routes';
import Footer from './Footer';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes />
      <Footer />
    </Fragment>
  );
};

export default App;
