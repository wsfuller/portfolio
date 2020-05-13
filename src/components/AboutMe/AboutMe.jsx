import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Timeline from '../Timeline';

import Avatars from './Avatars';
import DevTools from '../DevTools';
import SocialNetwork from '../SocialNetwork';
import Resume from '../../assets/documents/william-s-fuller-resume.pdf';
import AboutMeStyles from './AboutMe.styles';

const AboutMe = () => {
  const classes = AboutMeStyles();
  const {
    container,
    timeline,
    contentDivider,
    divider,
    aboutMe,
    details,
    listDivider,
    resumeButton
  } = classes;

  return (
    <Grid container spacing={3} className={container}>
      <Grid item xs className={timeline}>
        <Timeline />
      </Grid>
      <Grid item xs={12} sm={1} className={contentDivider}>
        <div className={divider} />
      </Grid>
      <Grid item xs className={aboutMe}>
        <div className={details}>
          <Avatars />
          <DevTools />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className={listDivider} />
            </Grid>
            <SocialNetwork />
          </Grid>
          <Button variant="contained" href={Resume} color="primary" className={resumeButton}>
            View Resume
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
