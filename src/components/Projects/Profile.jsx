import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Hero from '../Hero';
import Section from '../Section';

const useStyles = makeStyles(theme => ({}));

const ProjectProfile = ({ project }) => {
  const classes = useStyles();

  console.log('project profile: ', project);

  return (
    <Fragment>
      <Hero
        backgroundImage={project.images.hero.background}
        altText="Colored bars signifying a view of code with syntax highlighting"
        content={<h1>Hero image thing</h1>}
      />
      <Section title={project.name}>
        <Container>information in here</Container>
      </Section>
      <h1>Profile page</h1>
    </Fragment>
  );
};

ProjectProfile.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    images: PropTypes.shape({
      hero: PropTypes.shape({
        background: PropTypes.string
      })
    })
  }).isRequired
};

export default ProjectProfile;
