import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Redirect, withRouter } from 'react-router-dom';

import { Details } from '../components/Projects';
import Project from '../components/Projects/detailsData';

const ProjectProfile = ({ match }) => {
  const camelCase = text => {
    const name = text.split('-');

    for (let i = 0; i < name.length; i += 1) {
      name[i] = name[i].charAt(0).toUpperCase() + name[i].substr(1);
    }
    return name.join('');
  };
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
