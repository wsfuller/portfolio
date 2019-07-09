import React from 'react';
import { Picture } from 'react-responsive-picture';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Timeline from './Timeline';
import Me from '../assets/images/about-me/me.png';
import Me2x from '../assets/images/about-me/me@2x.png';
import Remy from '../assets/images/about-me/remy.png';
import Remy2x from '../assets/images/about-me/remy@2x.png';
import DevTools from './DevTools';
import SocialList from './SocialList';
import Resume from '../assets/documents/william-s-fuller-resume.pdf';

const useStyles = makeStyles(theme => ({
  container: {
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  timeline: {
    order: 3,
    [theme.breakpoints.up('sm')]: {
      order: 1
    }
  },
  contentDivider: {
    display: 'flex',
    alignItem: 'center',
    order: 2,
    marginBottom: theme.pxToRem(32)
  },
  divider: {
    width: '100%',
    height: theme.pxToRem(1),
    margin: 'auto',
    background: theme.colors.primary.default,
    opacity: '.25',
    [theme.breakpoints.up('sm')]: {
      width: theme.pxToRem(1),
      height: '100%'
    }
  },
  aboutMe: {
    order: 1,
    [theme.breakpoints.up('sm')]: {
      order: 3
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  detailsImages: {
    width: theme.pxToRem(175),
    height: theme.pxToRem(175),
    position: 'relative',
    margin: `0 auto ${theme.pxToRem(32)}`,
    [theme.breakpoints.up('md')]: {
      width: theme.pxToRem(250),
      height: theme.pxToRem(250)
    }
  },
  primaryImage: {
    width: theme.pxToRem(175),
    height: theme.pxToRem(175),
    border: `${theme.pxToRem(5)} solid ${theme.colors.grayScale.white}`,
    borderRadius: theme.borderRadius.rounded,
    boxShadow: `0 ${theme.pxToRem(5)} ${theme.pxToRem(10)} 0 rgba(0,0,0,.5)`,
    [theme.breakpoints.up('md')]: {
      width: theme.pxToRem(250),
      height: theme.pxToRem(250)
    }
  },
  secondaryImage: {
    width: theme.pxToRem(100),
    height: theme.pxToRem(100),
    position: 'absolute',
    top: theme.pxToRem(75),
    left: theme.pxToRem(-45),
    border: `${theme.pxToRem(5)} solid ${theme.colors.grayScale.white}`,
    borderRadius: theme.borderRadius.rounded,
    boxShadow: `0 ${theme.pxToRem(5)} ${theme.pxToRem(10)} 0 rgba(0,0,0,.5)`,
    [theme.breakpoints.up('md')]: {
      width: theme.pxToRem(125),
      height: theme.pxToRem(125),
      top: theme.pxToRem(125),
      left: theme.pxToRem(-60)
    }
  },
  listDivider: {
    width: theme.pxToRem(250),
    height: theme.pxToRem(2),
    margin: `${theme.pxToRem(16)} auto 0`,
    background: theme.colors.primary.default
  },
  resumeButton: {
    margin: `${theme.pxToRem(32)} auto`,
    color: theme.colors.grayScale.white
  }
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs className={classes.timeline}>
        <Timeline />
      </Grid>
      <Grid item xs={12} sm={1} className={classes.contentDivider}>
        <div className={classes.divider} />
      </Grid>
      <Grid item xs className={classes.aboutMe}>
        <div className={classes.details}>
          <div className={classes.detailsImages}>
            <Picture
              className={classes.primaryImage}
              src={`${Me2x} 2x, ${Me} 1x`}
              alt="Cartoon illustration of William S Fuller"
            />
            <Picture
              className={classes.secondaryImage}
              src={`${Remy2x} 2x, ${Remy} 1x`}
              alt="Cartoon illustration of Remy my Boston Terrier"
            />
          </div>
          <DevTools />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className={classes.listDivider} />
            </Grid>
            <SocialList />
          </Grid>
          <Button
            variant="contained"
            href={Resume}
            color="primary"
            className={classes.resumeButton}
          >
            View Resume
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
