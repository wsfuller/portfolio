import { makeStyles } from '@material-ui/core/styles';

const GalleryStyles = makeStyles(theme => ({
  galleryCarousel: {
    '& .carousel': {
      '& .slider-wrapper': {
        height: '100%',
        paddingBottom: '3rem'
      },
      '& .slide': {
        top: '.5rem',
        padding: '0 .5rem',
        textAlign: 'left',
        background: 'transparent'
      },
      '& .control-dots': {
        margin: 0
      },
      '& .control-dots .dot': {
        background: theme.colors.primary.default
      }
    }
  },
  card: {
    maxWidth: theme.pxToRem(345),
    margin: 'auto'
  },
  media: {
    height: 140
  },
  title: {
    fontSize: '1.25rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.h5.fontSize
    }
  },
  demoButton: {
    color: theme.colors.grayScale.white
  }
}));

export default GalleryStyles;
