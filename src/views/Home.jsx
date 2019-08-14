import React from 'react';
import LazyLoad from 'react-lazyload';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { FaCoffee, FaCode } from 'react-icons/fa';
import Hero from '../components/Hero';
import HeroImage from '../assets/images/hero-backgrounds/code-background.svg';
import Section from '../components/Section';
import ProjectsList from '../components/Projects/List';
import CompaniesList from '../components/Companies/List';
import GoogleMap from '../components/GoogleMap';
import AboutMe from '../components/AboutMe';

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: 'center'
  },
  heroText: {
    [theme.breakpoints.up('md')]: {
      fontSize: theme.pxToRem(60)
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.pxToRem(96)
    }
  },
  heroIcon: {
    position: 'relative',
    top: theme.pxToRem(16),
    margin: `0 ${theme.pxToRem(16)}`,
    color: theme.palette.primary.main
  }
}));

const Home = () => {
  const classes = useStyles();

  const heroContent = (
    <Container className={classes.container}>
      <Typography className={classes.heroText} variant="h1">
        Turning
        <FaCoffee className={classes.heroIcon} />
        into
        <FaCode className={classes.heroIcon} />
        since 2011
      </Typography>
    </Container>
  );

  return (
    <main>
      <Hero
        backgroundImage={HeroImage}
        altText="Colored bars signifying a view of code with syntax highlighting"
        content={heroContent}
      />
      <Section id="projects" title="Projects">
        <Container>
          <ProjectsList />
        </Container>
      </Section>
      <Section title="Worked For">
        <Container>
          <CompaniesList />
        </Container>
      </Section>
      <LazyLoad>
        <GoogleMap />
      </LazyLoad>

      <Section id="about-me" title="About Me">
        <Container>
          <AboutMe />
        </Container>
      </Section>
    </main>
  );
};

export default Home;
