import React from 'react';
import PropTypes from 'prop-types';

import { Carousel } from 'react-responsive-carousel';

import { useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import GalleryStyles from './Gallery.styles';
import GalleryCard from './GallaryCard';

import useWindowDimensions from '../../WindowDimensions';

const GalleryList = ({ projects }) => {
  const classes = GalleryStyles();
  const { galleryCarousel } = classes;
  const theme = useTheme();
  const { width } = useWindowDimensions();
  let content;

  if (width > theme.breakpoints.values.sm) {
    content = (
      <Grid container spacing={2}>
        {projects.map(project => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <GalleryCard project={project} />
          </Grid>
        ))}
      </Grid>
    );
  } else {
    content = (
      <Carousel
        className={galleryCarousel}
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        {projects.map(project => (
          <GalleryCard key={project.id} project={project} />
        ))}
      </Carousel>
    );
  }

  return content;
};

GalleryList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      demoUrl: PropTypes.string,
      gaEventLabels: PropTypes.shape({
        demo: PropTypes.string,
        learnMore: PropTypes.string
      })
    })
  ).isRequired
};

export default GalleryList;
