import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

import Branding from '../Branding';
import MainMenu from './MainMenu';

const styles = theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    background: theme.colors.grayScale.grayFive
  },
  brandingLink: {
    color: theme.colors.grayScale.white,
    textDecoration: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
});

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false
    };
  }

  toggleDrawer() {
    const { drawer } = this.state;

    this.setState({
      drawer: !drawer
    });
  }

  render() {
    const { classes } = this.props;
    const { drawer } = this.state;

    return (
      <Fragment>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <Link to="/" className={classes.brandingLink}>
              <Branding />
            </Link>
            <IconButton
              className={classes.menuButton}
              onClick={() => this.toggleDrawer()}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={drawer} onClose={() => this.toggleDrawer()}>
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.toggleDrawer()}
            onKeyDown={() => this.toggleDrawer()}
          >
            <MainMenu />
          </div>
        </Drawer>
      </Fragment>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.shape({
    toolbar: PropTypes.string,
    brandkingLink: PropTypes.string,
    menuButton: PropTypes.string
  }).isRequired
};

export default withStyles(styles)(Navbar);
