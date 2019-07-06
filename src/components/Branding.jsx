import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Image from './Image';
import Logo from '../assets/images/logo/logo.svg';

const useStyles = makeStyles(theme => ({
  branding: {
    display: 'inline-flex',
    alignItems: 'flex-start'
  },
  logo: {
    maxWidth: theme.pxToRem(40),
    marginRight: theme.pxToRem(16)
  },
  textBox: {
    height: theme.pxToRem(40),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    lineHeight: 1
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 1
  }
}));

const Branding = () => {
  const classes = useStyles();

  return (
    <div className={classes.branding}>
      <Image customClass={classes.logo} src={Logo} alt="WSF Logo" />
      <span className={classes.textBox}>
        <div className={classes.title}>William S Fuller</div>
        <div className={classes.subtitle}>Front End Engineer</div>
      </span>
    </div>
  );
};

export default Branding;
