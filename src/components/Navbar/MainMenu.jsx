import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Picture } from 'react-responsive-picture';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { FaGithub, FaLinkedinIn, FaFreeCodeCamp } from 'react-icons/fa';

import Me from '../../assets/images/about-me/me.png';
import Me2x from '../../assets/images/about-me/me@2x.png';
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
  link: {
    color: theme.colors.grayScale.white,
    textDecoration: 'none'
  }
}));

const MainMenu = () => {
  const classes = useStyles();

  const contactLink = (
    <a className={classes.link} href="mailto:williamsfuller@williamsfuller.com">
      Contact
    </a>
  );

  const resumeLink = (
    <a className={classes.link} href={Resume}>
      Resume
    </a>
  );

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
        <div>
          <IconButton href="https://github.com/wsfuller" aria-label="Github">
            <FaGithub />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/william-s-fuller-56249751/"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </IconButton>
          <IconButton href="https://www.freecodecamp.org/wsfuller" aria-label="Free Code Camp">
            <FaFreeCodeCamp />
          </IconButton>
        </div>
      </div>
      <List component="nav">
        <Divider />
        <ListItem button component={Link} to="#projects">
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={Link} to="#about-me">
          <ListItemText primary="About Me" />
        </ListItem>
        <ListItem button>
          <ListItemText primary={contactLink} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={resumeLink} />
        </ListItem>
      </List>
    </div>
  );
};

MainMenu.propTypes = {
  classes: PropTypes.shape({})
};

MainMenu.defaultProps = {
  classes: {}
};

export default MainMenu;
