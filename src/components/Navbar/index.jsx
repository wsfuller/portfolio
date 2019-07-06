import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

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
    justifyContent: 'space-between'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
});

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: true
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
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Branding />
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
    menuButton: PropTypes.string
  }).isRequired
};

export default withStyles(styles)(Navbar);
