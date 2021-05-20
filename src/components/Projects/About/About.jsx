/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { event } from 'react-ga';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import useAboutStyles from './About.styles';

const About = ({ description, releaseDate, demoUrl, gaEventLabels, gitHubUrl }) => {
  const { root } = useAboutStyles();

  return (
    <Grid container direction="column" spacing={2} className={root}>
      <Grid item>
        <Typography variant="h5" align="center" gutterBottom>
          About
        </Typography>
        <Typography className={description} variant="body1" gutterBottom>
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </Typography>
        <Typography variant="subtitle2" align="center">
          {`Released: ${releaseDate}`}
        </Typography>
      </Grid>
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            href={demoUrl}
            onClick={() =>
              event({
                category: 'Project Profile',
                action: 'Click',
                label: gaEventLabels.demo
              })
            }
          >
            Demo
          </Button>
        </Grid>
        <Grid item>
          <IconButton
            href={gitHubUrl}
            aria-label="Github"
            color="primary"
            onClick={() =>
              event({
                category: 'Project Profile',
                action: 'Click',
                label: gaEventLabels.github
              })
            }
          >
            <FaGithub />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

About.propTypes = {
  demoUrl: PropTypes.string.isRequired,
  gitHubUrl: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gaEventLabels: PropTypes.shape({
    demo: PropTypes.string,
    github: PropTypes.string
  }).isRequired
};

export default About;
