import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';
// import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// import Image from '../components/Image';
// import NotFoundImg from '../assets/images/not-found.svg';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     minHeight: '100vh',
//     marginTop: theme.pxToRem(120),
//     textAlign: 'center',
//   },
//   image: {
//     marginBottom: theme.pxToRem(32),
//   },
// }));

const NotFound = ({ history }: any) => {
  // const classes = useStyles();

  return (
    <Fragment>
      {/* <Helmet>
        <title>WSF Portfolio | 404</title>
      </Helmet>
      <main>
        <Container className={classes.container}>
          <Grid container direction="column" alignItems="center" justify="center">
            <Image customClass={classes.image} src={NotFoundImg} alt="404 Error page not found" />
            <Typography variant="h5" gutterBottom>
              Sorry about that, looks like what you are looking for can&apos;t be found
            </Typography>
            <Button variant="outlined" color="primary" className={classes.button} onClick={() => history.goBack()}>
              Go Back
            </Button>
          </Grid>
        </Container>
      </main> */}
    </Fragment>
  );
};

NotFound.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default withRouter(NotFound);
