import React from 'react';

import Grid from '@material-ui/core/Grid';

import GalleryList from './GalleryList';
import projects from './galleryData';

const Gallery = () => {
  return (
    <Grid container spacing={2}>
      <GalleryList projects={projects} />
    </Grid>
  );
};

export default Gallery;
