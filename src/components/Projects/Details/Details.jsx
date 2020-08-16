import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Picture } from 'react-responsive-picture';
import { event } from 'react-ga';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FaGithub } from 'react-icons/fa';

import Hero from '../../Hero';
import Section from '../../Section';
import Image from '../../Image';
import DetailsStyles from './Details.styles';

const Details = ({ project }) => {
  const classes = DetailsStyles();
  const {
    heroOverlay,
    heroImage,
    responsiveImage,
    about,
    description,
    projectButtons,
    demoButton
  } = classes;

  const heroContent = (
    <div className={heroOverlay}>
      <Image customClass={heroImage} src={project.images.hero.logo} alt={`${project.name} logo`} />
    </div>
  );

  return (
    <Fragment>
      <Hero
        backgroundImage={project.images.hero.background}
        altText={`Screenshot of the ${project.name} application`}
        content={heroContent}
      />
      <Section title={project.name}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Picture
                className={responsiveImage}
                src={`${project.images.snapShots.at2x} 2x, ${project.images.snapShots.default} 1x`}
                alt={`Screenshot of ${project.name} inside an illustration of a browser window`}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={about}>
                <Typography variant="h5" align="center" gutterBottom>
                  About
                </Typography>
                <Typography className={description} variant="body1" align="justify" gutterBottom>
                  {/* // eslint-disable-next-line react/no-danger */}
                  <span dangerouslySetInnerHTML={{ __html: project.description }} />
                </Typography>
                <Typography variant="body1" align="center">
                  {`Released: ${project.releaseDate}`}
                </Typography>
                <div className={projectButtons}>
                  <Button
                    variant="contained"
                    color="primary"
                    href={project.demoUrl}
                    className={demoButton}
                    onClick={() =>
                      event({
                        category: 'Project Profile',
                        action: 'Click',
                        label: project.gaEventLabels.demo
                      })
                    }
                  >
                    Demo
                  </Button>
                  <IconButton
                    href={project.gitHubUrl}
                    aria-label="Github"
                    color="primary"
                    onClick={() =>
                      event({
                        category: 'Project Profile',
                        action: 'Click',
                        label: project.gaEventLabels.github
                      })
                    }
                  >
                    <FaGithub />
                  </IconButton>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </Fragment>
  );
};

Details.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    demoUrl: PropTypes.string,
    gitHubUrl: PropTypes.string,
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
    description: PropTypes.string,
    gaEventLabels: PropTypes.shape({
      demo: PropTypes.string,
      github: PropTypes.string
    })
  }).isRequired
};

export default Details;
