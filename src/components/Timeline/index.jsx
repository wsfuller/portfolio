import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';

import theme from '../../theme';
import AboutMeEvents from './data';

const styles = {
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
    background: theme.colors.grayScale.grayFour
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

const PortfolioTimeline = () => {
  return (
    <Timeline lineColor={theme.colors.primary.default} style={styles.timeline}>
      {AboutMeEvents.map(event => (
        <TimelineEvent
          key={event.date}
          title={event.title}
          createdAt={<span style={styles.createdAt}>{event.date}</span>}
          icon={<span style={styles.icon}>{event.icon}</span>}
          bubbleStyle={styles.bubble}
          titleStyle={styles.title}
          contentStyle={styles.content}
          collapsible
        >
          {event.description}
        </TimelineEvent>
      ))}
    </Timeline>
  );
};

export default PortfolioTimeline;
