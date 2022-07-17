import React from 'react';

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tools: string[];
  links: {
    demo: string;
    github: string;
  };
};

export default CardProps;
