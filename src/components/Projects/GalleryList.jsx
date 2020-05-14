import React from 'react';
import PropTypes from 'prop-types';
import { event } from 'react-ga';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import GalleryStyles from './Gallery.styles';

const GalleryList = ({ projects }) => {
  const classes = GalleryStyles();
  const { card, media, demoButton } = classes;

  return projects.map(project => (
    <Grid item key={project.id} xs={12} sm={6} md={4}>
      <Card className={card}>
        <CardMedia className={media} image={project.image} title={`${project.title} Logo`} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className={demoButton}
            size="small"
            color="primary"
            variant="contained"
            href={project.demoUrl}
            onClick={() =>
              event({
                category: 'Project List',
                action: 'Click',
                label: project.gaEventLabels.demo
              })
            }
          >
            View Demo
          </Button>
          <Button
            size="small"
            color="primary"
            href={`/projects/${project.id}`}
            onClick={() =>
              event({
                category: 'Project List',
                action: 'Click',
                label: project.gaEventLabels.learnMore
              })
            }
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ));
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
