import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Picture } from 'react-responsive-picture';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaGithub, FaLinkedinIn, FaFreeCodeCamp } from 'react-icons/fa';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import MainMenuStyles from './MainMenu.styles';

import Me from '../../assets/images/avatars/me.png';
import Me2x from '../../assets/images/avatars/me@2x.png';
import Resume from '../../assets/documents/william-s-fuller-resume.pdf';

const MainMenu = ({ location }) => {
  const classes = MainMenuStyles();
  const { root, intro, introImage, title, subtitle, social, linkText } = classes;

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
            <ListItemText className={linkText} primary="Projects" />
          </ListItem>
          <ListItem button component="a" href="/#about-me">
            <ListItemText className={linkText} primary="About Me" />
          </ListItem>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <ListItem button component={projectsLink}>
          <ListItemText className={linkText} primary="Projects" />
        </ListItem>
        <ListItem button component={aboutMeLink}>
          <ListItemText className={linkText} primary="About Me" />
        </ListItem>
      </Fragment>
    );
  };

  const contactLink = React.forwardRef((props, ref) => (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a href="mailto:wsfuller.dev@gmail.com" {...props} ref={ref} />
  ));

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  const resumeLink = React.forwardRef((props, ref) => <a href={Resume} {...props} ref={ref} />);

  return (
    <div className={root}>
      <div className={intro}>
        <Picture
          className={introImage}
          src={`${Me2x} 2x, ${Me} 1x`}
          alt="Cartoon illustration of William S Fuller"
        />
        <Typography variant="body1" className={title} gutterBottom>
          William S Fuller
        </Typography>
        <Typography variant="body1" className={subtitle} gutterBottom>
          Front End Engineer
        </Typography>
        <Typography variant="caption">Seattle, WA</Typography>
        <div className={social}>
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
          <ListItemText className={linkText} primary="Contact" />
        </ListItem>
        <ListItem button component={resumeLink}>
          <ListItemText className={linkText} primary="Resume" />
        </ListItem>
      </List>
    </div>
  );
};

MainMenu.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
};

export default withRouter(MainMenu);
