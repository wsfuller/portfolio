import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Picture } from 'react-responsive-picture';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { FaGithub, FaLinkedinIn, FaFreeCodeCamp } from 'react-icons/fa';

import Me from '../../assets/images/avatars/me.png';
import Me2x from '../../assets/images/avatars/me@2x.png';
import Resume from '../../assets/documents/william-s-fuller-resume.pdf';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80vw',
    maxWidth: 320,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('md')]: {
      width: '20vw'
    }
  },
  branding: {
    justifyContent: 'center'
  },
  intro: {
    textAlign: 'center'
  },
  introImage: {
    width: theme.pxToRem(125),
    height: theme.pxToRem(125),
    margin: `${theme.pxToRem(8)} auto`,
    background: theme.colors.grayScale.grayOne,
    border: `${theme.pxToRem(5)} solid ${theme.colors.grayScale.grayOne}`,
    borderRadius: theme.borderRadius.rounded
  },
  title: {
    ...theme.branding.title
  },
  subtitle: {
    ...theme.branding.subtitle
  },
  social: {
    margin: `${theme.pxToRem(8)} auto`
  },
  linkText: {
    color: theme.colors.grayScale.white,
    textDecoration: 'none'
  }
}));

const MainMenu = ({ location }) => {
  const classes = useStyles();

  const projectsLink = React.forwardRef((props, ref) => (
    <AnchorLink href="#projects" offset={() => 50} {...props} ref={ref} />
  ));

  const aboutMeLink = React.forwardRef((props, ref) => (
    <AnchorLink href="#about-me" offset={() => 50} {...props} ref={ref} />
  ));

  const renderScrollingOrAnchorLinks = () => {
    if (location.pathname !== '/') {
      return (
        <Fragment>
          <ListItem button component="a" href="/#projects">
            <ListItemText className={classes.linkText} primary="Projects" />
          </ListItem>
          <ListItem button component="a" href="/#about-me">
            <ListItemText className={classes.linkText} primary="About Me" />
          </ListItem>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <ListItem button component={projectsLink}>
          <ListItemText className={classes.linkText} primary="Projects" />
        </ListItem>
        <ListItem button component={aboutMeLink}>
          <ListItemText className={classes.linkText} primary="About Me" />
        </ListItem>
      </Fragment>
    );
  };

  const contactLink = React.forwardRef((props, ref) => (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a href="mailto:williamsfuller@williamsfuller.com" {...props} ref={ref} />
  ));

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  const resumeLink = React.forwardRef((props, ref) => <a href={Resume} {...props} ref={ref} />);

  return (
    <div className={classes.root}>
      <div className={classes.intro}>
        <Picture
          className={classes.introImage}
          src={`${Me2x} 2x, ${Me} 1x`}
          alt="Cartoon illustration of William S Fuller"
        />
        <Typography variant="body1" className={classes.title} gutterBottom>
          William S Fuller
        </Typography>
        <Typography variant="body1" className={classes.subtitle} gutterBottom>
          Front End Engineer
        </Typography>
        <Typography variant="caption">Seattle, WA</Typography>
        <div className={classes.social}>
          <IconButton href="https://github.com/wsfuller" aria-label="Github">
            <FaGithub />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/william-s-fuller-56249751/"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </IconButton>
          <IconButton href="https://www.freecodecamp.org/wsfuller" aria-label="freeCodeCamp">
            <FaFreeCodeCamp />
          </IconButton>
        </div>
      </div>
      <Divider />
      <List component="nav">
        {renderScrollingOrAnchorLinks()}
        <ListItem button component={contactLink}>
          <ListItemText className={classes.linkText} primary="Contact" />
        </ListItem>
        <ListItem button component={resumeLink}>
          <ListItemText className={classes.linkText} primary="Resume" />
        </ListItem>
      </List>
    </div>
  );
};

MainMenu.propTypes = {
  classes: PropTypes.shape({}),
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
};

MainMenu.defaultProps = {
  classes: {}
};

export default withRouter(MainMenu);
