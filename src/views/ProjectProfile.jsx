import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Redirect, withRouter } from 'react-router-dom';

import { Details } from '../components/views/Projects';
import Project from '../components/views/Projects/Details/detailsData';

import camelCase from '../utils/camelCase';

const ProjectProfile = ({ match }) => {
  const projectName = camelCase(match.params.name);
  const projectDetails = Project[projectName];

  if (!projectDetails) {
    return <Redirect to="/not-found" />;
  }
  return (
    <Fragment>
      <Helmet>
        <title>{`WSF Portfolio | ${projectDetails.name}`}</title>
      </Helmet>
      <Details project={projectDetails} />
    </Fragment>
  );
};

ProjectProfile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string
    })
  }).isRequired
};

export default withRouter(ProjectProfile);
