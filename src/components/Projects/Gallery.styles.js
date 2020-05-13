import { makeStyles } from '@material-ui/core/styles';

const GalleryStyles = makeStyles(theme => ({
  card: {
    maxWidth: theme.pxToRem(345),
    margin: 'auto'
  },
  media: {
    height: 140
  },
  demoButton: {
    color: theme.colors.grayScale.white
  }
}));

export default GalleryStyles;
