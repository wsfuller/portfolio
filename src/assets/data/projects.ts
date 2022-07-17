type ProjectItem = {
  id: string;
  name: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
  tools: string[];
};

type Projects = ProjectItem[];

const projects: Projects = [
  {
    id: 'movie-finder',
    name: 'Movie Finder',
    description:
      'Web application powered by The Movie Database API that allows users to search and save movies to a watch later list',
    demoUrl: 'https://wsf-moviefinder.netlify.app/',
    githubUrl: 'https://github.com/wsfuller/MovieFinder',
    tools: ['React', 'Redux', 'TypeScript', 'Fluent UI'],
  },
  {
    id: 'elder-scrolls-legends',
    name: 'Elder Scrolls Legends',
    description:
      'Web application powered by the Elder Scrolls Legends API that allows for searching and saving cards',
    demoUrl: 'https://elder-scrolls-legends.netlify.com/',
    githubUrl: 'https://github.com/wsfuller/elder-scrolls-legends',
    tools: ['React', 'Redux', 'Material UI'],
  },
];

export default projects;
