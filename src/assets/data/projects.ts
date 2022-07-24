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
    id: 'react-weather',
    name: 'React Weather',
    description:
      'Web application powered by the OpenWeatherMap API that allows for up to date daily weather reports',
    demoUrl: 'https://wsf-react-weather.netlify.app/',
    githubUrl: 'https://github.com/wsfuller/react-weather',
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
  {
    id: 'fetch-doggos',
    name: 'FetchDoggos',
    description:
      'Web application powered by the DOG API that allows for fetching random dogs of specific breeds',
    demoUrl: 'https://fetch-doggos.netlify.app/',
    githubUrl: 'https://github.com/wsfuller/fetchDoggos',
    tools: ['React', 'Redux', 'Styled Components', 'Semantic UI'],
  },
  {
    id: 'wsfuller-resume-api',
    name: 'Resume API',
    description: 'REST API for fetching my resume in JSON format',
    demoUrl: 'https://wsf-resume-api.herokuapp.com/',
    githubUrl: 'https://github.com/wsfuller/resume-api',
    tools: ['Node', 'Express', 'Mongo DB', 'Heroku'],
  },
  {
    id: 'dark-remnants-podcast',
    name: 'Dark Remnants Podcast',
    description: 'Web application showcasing episodes fo the Dark Remnants Podcast',
    demoUrl: 'http://dark-remnants-podcast.herokuapp.com/',
    githubUrl: 'https://github.com/wsfuller/dark-remnants-podcast',
    tools: ['React', 'Sass', 'Heroku'],
  },
];

export default projects;
