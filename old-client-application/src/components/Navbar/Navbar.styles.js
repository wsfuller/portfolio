const NavbarStyles = theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    background: theme.colors.grayScale.grayFive
  },
  brandingLink: {
    color: theme.colors.grayScale.white,
    textDecoration: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
});

export default NavbarStyles;
