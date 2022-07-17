import React from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { FiExternalLink } from 'react-icons/fi';

import CardProps from './Card.props';
import {
  StyledCard,
  StyledHeader,
  StyledIcon,
  StyledTitle,
  StyledDescription,
  StyledToolList,
  StyledFooter,
} from './Card.styles';

import Button from '../Button';

const Card: React.FC<CardProps> = ({ icon, title, description, tools, links }) => (
  <StyledCard>
    <StyledHeader>
      <StyledIcon>{icon}</StyledIcon>
    </StyledHeader>

    <StyledTitle>{title}</StyledTitle>
    <StyledDescription>{description}</StyledDescription>
    <StyledToolList>
      {tools.map((tool) => (
        <li key={tool}>{tool}</li>
      ))}
    </StyledToolList>
    <StyledFooter>
      <Button as="a" anchorAttributes={{ href: links.demo }}>
        <FiExternalLink />
      </Button>
      <Button as="a" anchorAttributes={{ href: links.github }}>
        <DiGithubBadge />
      </Button>
    </StyledFooter>
  </StyledCard>
);

export default Card;
