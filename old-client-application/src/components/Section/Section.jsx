import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import SectionStyles from './Section.styles';

const Section = ({ children, title, id }) => {
  const classes = SectionStyles();
  const { section, container, title: titleStyle, titleUnderline } = classes;

  const sectionTitle = (
    <Container className={container}>
      <Typography className={titleStyle} variant="h2">
        {title}
        <div className={titleUnderline} />
      </Typography>
    </Container>
  );

  return (
    <section id={id} className={section}>
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
