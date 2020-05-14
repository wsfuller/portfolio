import React from 'react';
import { FaHeart } from 'react-icons/fa';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import FooterStyles from './Footer.styles';

const Footer = () => {
  const classes = FooterStyles();
  const { footer, heart, copyright } = classes;

  return (
    <footer className={footer}>
      <Container>
        <Grid container justify="center">
          Made with
          <FaHeart className={heart} />
          <span className={copyright}>&copy;</span>
          {new Date().getFullYear()}
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
