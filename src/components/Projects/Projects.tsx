import React from 'react';
import { RiCodeBoxLine } from 'react-icons/ri';

import projects from '../../assets/data/projects';
import StyledProjects from './Projects.styles';
import Section from '../Section';
import Card from '../Card';

const Projects: React.FC = () => (
  <Section title="Projects" id="projects">
    <StyledProjects>
      {projects.map((project) => (
        <Card
          key={project.id}
          icon={<RiCodeBoxLine />}
          title={project.name}
          description={project.description}
          tools={project.tools}
          links={{
            demo: project.demoUrl,
            github: project.githubUrl,
          }}
        />
      ))}
    </StyledProjects>
  </Section>
);

export default Projects;
