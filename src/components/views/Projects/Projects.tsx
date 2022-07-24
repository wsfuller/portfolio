import React from 'react';

import { projects } from '../../../assets/data/projects';
import Section from '../../Section';
import Carousel from '../../Carousel';

const Projects: React.FC = () => (
  <Section title="Projects" id="projects">
    <Carousel items={projects} />
  </Section>
);

export default Projects;
