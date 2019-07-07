import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ProjectData from './list-data';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: theme.pxToRem(345),
    margin: 'auto'
  },
  media: {
    height: 140
  },
  demoButton: {
    color: theme.colors.grayScale.white
  }
}));

const ProjectsList = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {ProjectData.map(project => (
        <Grid item key={project.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={project.image}
              title={`${project.title} Logo`}
            />
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
                className={classes.demoButton}
                size="small"
                color="primary"
                variant="contained"
                href={project.demoUrl}
              >
                View Demo
              </Button>
              <Button size="small" color="primary" href={`/projects/${project.Id}`}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsList;
