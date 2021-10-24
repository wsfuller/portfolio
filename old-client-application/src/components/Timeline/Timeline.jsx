import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';

import theme from '../../theme';
import TimelineEvents from './timelineData';
import TimelineStyles from './Timeline.styles';

const AboutTimeline = () => {
  const {
    timeline: timelineStyle,
    createdAt: createdAtStyle,
    icon: iconStyle,
    bubble: bubbleStyle,
    title: titleStyle,
    content: contentStyle
  } = TimelineStyles;

  return (
    <Timeline lineColor={theme.colors.primary.default} style={timelineStyle}>
      {TimelineEvents.map(({ date, title, icon, description }) => (
        <TimelineEvent
          key={date + title}
          title={title}
          createdAt={<span style={createdAtStyle}>{date}</span>}
          icon={<span style={iconStyle}>{icon}</span>}
          bubbleStyle={bubbleStyle}
          titleStyle={titleStyle}
          contentStyle={contentStyle}
          collapsible
        >
          {description}
        </TimelineEvent>
      ))}
    </Timeline>
  );
};

export default AboutTimeline;
