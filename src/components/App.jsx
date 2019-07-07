import React, { Fragment } from 'react';

import Navbar from './Navbar';
import Routes from '../views/Routes';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes />
    </Fragment>
  );
};

export default App;
