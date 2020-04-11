const elderScrollsLegends = require('../../assets/images/projects/elder-scrolls-legends/card-logo.svg');
const reactStarWars = require('../../assets/images/projects/react-star-wars/card-logo.svg');
const fetchDoggos = require('../../assets/images/projects/fetch-doggos/card-logo.svg');
const resumeApi = require('../../assets/images/projects/resume-api/card-logo.svg');
const darkRemnantsPodcast = require('../../assets/images/projects/dark-remnants-podcast/card-logo.svg');
const reactWeather = require('../../assets/images/projects/react-weather/card-logo.svg');
const ghostJackEntertainment = require('../../assets/images/projects/ghost-jack-entertainment/card-logo.svg');
// const angularPokedex = require('../../assets/images/projects/angular-pokedex/card-logo.svg');
const movieFinder = require('../../assets/images/projects/movie-finder/card-logo.svg');
const uWatch = require('../../assets/images/projects/uwatch/card-logo.svg');

module.exports = [
  {
    id: 'elder-scrolls-legends',
    title: 'Elder Scrolls Legends',
    description: 'React + Material UI application powered by the Elders Scrolls Legends API',
    image: elderScrollsLegends,
    demoUrl: 'https://elder-scrolls-legends.netlify.com/'
  },
  {
    id: 'react-star-wars',
    title: 'React Star Wars',
    description:
      'React + GraphQL + Apollo Client powered by the GraphCMS GraphQL Star Wars API wrapper',
    image: reactStarWars,
    demoUrl: 'https://react-star-wars.netlify.com/'
  },
  {
    id: 'fetch-doggos',
    title: 'FetchDoggos',
    description: 'React + Redux application powered by the Dog API',
    image: fetchDoggos,
    demoUrl: 'https://fetch-doggos.netlify.com/'
  },
  {
    id: 'resume-api',
    title: 'Resume API',
    description: 'My Resume as an API using Node, Mongo, and Heroku ',
    image: resumeApi,
    demoUrl: 'https://wsf-resume-api.herokuapp.com/'
  },
  {
    id: 'dark-remnants-podcast',
    title: 'Dark Remnants Podcast',
    description: 'Single Page React app showcasing episodes for the Dark Remnants Podcast',
    image: darkRemnantsPodcast,
    demoUrl: 'http://dark-remnants-podcast.herokuapp.com/'
  },
  {
    id: 'react-weather',
    title: 'ReactWeather',
    description: 'React application using the OpenWeatherMap API to bring in weather information',
    image: reactWeather,
    demoUrl: 'https://wsf-react-weather.netlify.com/'
  },
  {
    id: 'ghost-jack-entertainment',
    title: 'GhostJack Entertainment',
    description: 'Single page client site using HTML, Sass, and jQuery',
    image: ghostJackEntertainment,
    demoUrl: 'http://ghostjackent.com/'
  },
  // {
  //   id: 'angular-pokedex',
  //   title: 'Angular-Pokedex',
  //   description: 'Angular 1 application powered by the Pokedex API',
  //   image: angularPokedex,
  //   demoUrl: 'https://www.williamsfuller.com/projects/angular-pokedex/'
  // },
  {
    id: 'movie-finder',
    title: 'Movie Finder',
    description: 'Single page site using HTML, Sass, and jQuery to fetch data from themoviedb.org',
    image: movieFinder,
    demoUrl: 'https://wsfuller.github.io/movieFinder/'
  },
  {
    id: 'uwatch',
    title: 'uWatch',
    description: 'Single page site using HTML, Sass, jQuery, and Bootstrap',
    image: uWatch,
    demoUrl: 'https://wsfuller.github.io/uWatch/'
  }
];
