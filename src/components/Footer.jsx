import React from 'react';
import { FaHeart } from 'react-icons/fa';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.pxToRem(60),
    paddingBottom: theme.pxToRem(60),
    background: theme.colors.grayScale.grayFive
  },
  heart: {
    color: theme.palette.error.main,
    margin: `0 ${theme.pxToRem(8)}`
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container>
        <Grid container justify="center">
          Made with
          <FaHeart className={classes.heart} />
          {new Date().getFullYear()}
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
