import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';
// import { Redirect, withRouter } from 'react-router-dom';

// import { Details } from '../components/Projects';
// import Project from '../components/Projects/Details/detailsData';

// import camelCase from '../utils/camelCase';

const ProjectProfile = ({ match }: any) => {
  // const projectName = camelCase(match.params.name);
  // const projectDetails = Project[projectName];

  // if (!projectDetails) {
  //   return <Redirect to="/not-found" />;
  // }
  // return (
  //   <Fragment>
  //     <Helmet>
  //       <title>{`WSF Portfolio | ${projectDetails.name}`}</title>
  //     </Helmet>
  //     <Details project={projectDetails} />
  //   </Fragment>
  // );
  return <h1>Project profile page</h1>;
};

ProjectProfile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

// export default withRouter(ProjectProfile);
export default ProjectProfile;
