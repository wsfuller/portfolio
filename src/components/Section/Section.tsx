import React from 'react';

import SectionProps from './Section.props';
import { StyledSection, StyledTitle } from './Section.styles';

const Section: React.FC<SectionProps> = ({ children, title, testid }) => (
  <StyledSection data-testid={testid}>
    <StyledTitle>{title}</StyledTitle>
    {children}
  </StyledSection>
);

// const Section = ({ children, title, id }) => {
//   const classes = SectionStyles();
//   const { section, container, title: titleStyle, titleUnderline } = classes;

//   const sectionTitle = (
//     <Container className={container}>
//       <Typography className={titleStyle} variant="h2">
//         {title}
//         <div className={titleUnderline} />
//       </Typography>
//     </Container>
//   );

//   return (
//     <section id={id} className={section}>
//       {title ? sectionTitle : null}
//       {children}
//     </section>
//   );
// };

export default Section;
