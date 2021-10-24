import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Picture } from 'react-responsive-picture';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import useDetailsStyles from './Details.styles';
import About from '../About';
import Lighthouse from '../Lighthouse';
import Hero from '../../Hero';
import Section from '../../Section';
import Image from '../../Image';

const Details = ({ project }) => {
  const classes = useDetailsStyles();
  const { heroOverlay, heroImage, responsiveImage } = classes;

  const heroContent = (
    <div className={heroOverlay}>
      <Image
        customClass={heroImage}
        src={project.images.hero.logo.default}
        alt={`${project.name} logo`}
      />
    </div>
  );

  return (
    <Fragment>
      <Hero
        backgroundImage={project.images.hero.background.default}
        altText={`Screenshot of the ${project.name} application`}
        content={heroContent}
      />
      <Section title={project.name}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Picture
                className={responsiveImage}
                src={`${project.images.snapShots.at2x.default} 2x, ${project.images.snapShots.default} 1x`}
                alt={`Screenshot of ${project.name} inside an illustration of a browser window`}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container direction="column" alignItems="center">
                <Grid item xs={12} sm={10}>
                  <About
                    description={project.description}
                    releaseDate={project.releaseDate}
                    demoUrl={project.demoUrl}
                    gitHubUrl={project.gitHubUrl}
                    gaEventLabels={project.gaEventLabels}
                  />
                </Grid>
                {project?.metrics?.lighthouse && (
                  <Grid item xs={12}>
                    <Lighthouse metrics={project.metrics} />
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </Fragment>
  );
};

Details.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    demoUrl: PropTypes.string.isRequired,
    gitHubUrl: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    images: PropTypes.shape({
      hero: PropTypes.shape({
        logo: PropTypes.shape({
          default: PropTypes.string
        }),
        background: PropTypes.shape({
          default: PropTypes.string
        })
      }),
      snapShots: PropTypes.shape({
        at2x: PropTypes.shape({
          default: PropTypes.string
        }),
        default: PropTypes.shape({
          default: PropTypes.string
        })
      })
    }).isRequired,
    description: PropTypes.string.isRequired,
    gaEventLabels: PropTypes.shape({
      demo: PropTypes.string,
      github: PropTypes.string
    }).isRequired,
    metrics: PropTypes.shape({
      lighthouse: PropTypes.shape({
        performance: PropTypes.number,
        accessibility: PropTypes.number,
        bestPractices: PropTypes.number,
        seo: PropTypes.number
      })
    })
  })
};

Details.defaultProps = {
  project: PropTypes.shape({
    metrics: PropTypes.shape({
      lighthouse: PropTypes.shape({})
    })
  })
};

export default Details;
