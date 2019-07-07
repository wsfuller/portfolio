import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  section: {
    width: '100%',
    height: '100%',
    paddingTop: theme.pxToRem(40),
    paddingBottom: theme.pxToRem(40),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.pxToRem(60),
      paddingBottom: theme.pxToRem(60)
    }
  },
  container: {
    textAlign: 'center'
  },
  title: {
    display: 'flex',
    'flex-direction': 'column',
    position: 'relative'
  },
  titleUnderline: {
    width: theme.pxToRem(80),
    height: theme.pxToRem(3),
    margin: `${theme.pxToRem(8)} auto ${theme.pxToRem(40)}`,
    'background-color': theme.colors.primary.default
  }
}));

const Section = ({ children, title, id }) => {
  const classes = useStyles();
  const sectionTitle = (
    <Container className={classes.container}>
      <Typography className={classes.title} variant="h2">
        {title}
        <div className={classes.titleUnderline} />
      </Typography>
    </Container>
  );

  return (
    <section id={id} className={classes.section}>
      {title ? sectionTitle : null}
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  id: PropTypes.string
};

Section.defaultProps = {
  title: '',
  id: null
};

export default Section;
