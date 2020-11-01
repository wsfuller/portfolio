import theme from '../../theme';

const TimelineStyles = {
  timeline: {
    width: '65%',
    fontSize: 'inherit',
    fontWeight: 'normal'
  },
  createdAt: {
    color: theme.colors.grayScale.white,
    fontSize: theme.pxToRem(12)
  },
  icon: {
    display: 'flex',
    fontSize: theme.pxToRem(16)
  },
  bubble: {
    width: theme.pxToRem(36),
    height: theme.pxToRem(36),
    left: theme.pxToRem(-2),
    borderColor: theme.colors.primary.default,
    background: theme.colors.grayScale.grayFour,
    pointerEvents: 'none'
  },
  title: {
    color: theme.colors.grayScale.white,
    fontSize: theme.pxToRem(12)
  },
  content: {
    color: theme.colors.grayScale.black,
    fontSize: theme.pxToRem(14),
    background: theme.colors.grayScale.white,
    borderRadius: theme.borderRadius.default
  }
};

export default TimelineStyles;
