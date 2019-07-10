import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Picture } from 'react-responsive-picture';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Hero from '../Hero';
import Section from '../Section';
import Image from '../Image';

const useStyles = makeStyles(theme => ({
  overlay: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
    background: 'rgba(33,33,33, 0.8)'
  },
  heroImage: {
    width: 1200,
    opacity: 0.8
  },
  responsiveImage: {
    width: '100%',
    maxWidth: theme.pxToRem(800),
    height: 'auto',
    display: 'block',
    margin: 'auto'
  },
  about: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto'
  },
  description: {
    marginBottom: theme.pxToRem(24)
  },
  demoButton: {
    marginTop: theme.pxToRem(24),
    color: theme.colors.grayScale.white
  }
}));

const ProjectProfile = ({ project }) => {
  const classes = useStyles();

  console.log('project profile: ', project);

  const heroContent = (
    <div className={classes.overlay}>
      <Image
        customClass={classes.heroImage}
        src={project.images.hero.logo}
        alt={`${project.name} logo`}
      />
    </div>
  );

  return (
    <Fragment>
      <Hero
        backgroundImage={project.images.hero.background}
        altText="Colored bars signifying a view of code with syntax highlighting"
        content={heroContent}
      />
      <Section title={project.name}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Picture
                className={classes.responsiveImage}
                src={`${project.images.snapShots.at2x} 2x, ${project.images.snapShots.default} 1x`}
                alt={`Screenshot of ${project.name} inside an illustration of a browser window`}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.about}>
                <Typography variant="h5" align="center" gutterBottom>
                  About
                </Typography>
                <Typography
                  className={classes.description}
                  variant="body1"
                  align="justify"
                  gutterBottom
                >
                  {/* // eslint-disable-next-line react/no-danger */}
                  <span dangerouslySetInnerHTML={{ __html: project.description }} />
                </Typography>
                <Typography variant="body1" align="center">
                  {`Released: ${project.releaseDate}`}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.demoUrl}
                  className={classes.demoButton}
                >
                  Demo
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </Fragment>
  );
};

ProjectProfile.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    demoUrl: PropTypes.string,
    releaseDate: PropTypes.string,
    images: PropTypes.shape({
      hero: PropTypes.shape({
        logo: PropTypes.string,
        background: PropTypes.string
      }),
      snapShots: PropTypes.shape({
        at2x: PropTypes.string,
        default: PropTypes.string
      })
    }),
    description: PropTypes.string
  }).isRequired
};

export default ProjectProfile;
