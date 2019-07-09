import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Profile from '../components/Projects/Profile';
import Projects from '../components/Projects/profile-data';

const ProjectProfile = ({ match }) => {
  const camelCase = text => {
    const name = text.split('-');

    for (let i = 0; i < name.length; i += 1) {
      name[i] = name[i].charAt(0).toUpperCase() + name[i].substr(1);
    }
    return name.join('');
  };
  const projectName = camelCase(match.params.name);

  const projectDetails = Projects[projectName];

  return <Profile project={projectDetails} />;
};

ProjectProfile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string
    })
  }).isRequired
};

export default withRouter(ProjectProfile);
