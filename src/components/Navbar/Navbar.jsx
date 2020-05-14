import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { event } from 'react-ga';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

import LogoBranding from '../LogoBranding';
import MainMenu from './MainMenu';
import NavbarStyles from './Navbar.styles';

const Navbar = props => {
  const [drawer, setDrawer] = useState(false);
  const { classes } = props;
  const { toolbar, brandingLink, menuButton } = classes;

  const toggleDrawer = () => {
    let googleDrawerLabel = '';

    if (drawer === false) {
      googleDrawerLabel = 'Open Main Menu';
    } else {
      googleDrawerLabel = 'Close Main Menu';
    }
    event({
      category: 'Application Surface',
      action: 'Click',
      label: googleDrawerLabel
    });
    return setDrawer(!drawer);
  };

  return (
    <Fragment>
      <AppBar position="fixed">
        <Toolbar className={toolbar}>
          <Link
            to="/"
            className={brandingLink}
            onClick={() =>
              event({
                category: 'Application Surface',
                action: 'Click',
                label: 'Navbar Logo Branding'
              })
            }
          >
            <LogoBranding />
          </Link>
          <IconButton
            className={menuButton}
            onClick={() => toggleDrawer()}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawer} onClose={() => toggleDrawer()}>
        <div
          tabIndex={0}
          role="button"
          onClick={() => toggleDrawer()}
          onKeyDown={() => toggleDrawer()}
        >
          <MainMenu />
        </div>
      </Drawer>
    </Fragment>
  );
};
// }

Navbar.propTypes = {
  classes: PropTypes.shape({
    toolbar: PropTypes.string,
    brandingLink: PropTypes.string,
    menuButton: PropTypes.string
  }).isRequired
};

export default withStyles(NavbarStyles)(Navbar);
