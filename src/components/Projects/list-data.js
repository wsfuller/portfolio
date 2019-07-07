const reactStarWars = require('../../assets/images/projects/react-star-wars/card-logo.svg');
const reactWeather = require('../../assets/images/projects/react-weather/card-logo.svg');
const darkRemnantsPodcast = require('../../assets/images/projects/dark-remnants-podcast/card-logo.svg');
const ghostJackEntertainment = require('../../assets/images/projects/ghost-jack-entertainment/card-logo.svg');
const angularPokedex = require('../../assets/images/projects/angular-pokedex/card-logo.svg');
const movieFinder = require('../../assets/images/projects/movie-finder/card-logo.svg');
const uWatch = require('../../assets/images/projects/uwatch/card-logo.svg');

module.exports = [
  {
    id: 'react-star-wars',
    title: 'React Star Wars',
    description:
      'React + GraphQL + Apollo Client powered by the GraphCMS GraphQL Star Wars API wrapper',
    image: reactStarWars,
    demoUrl: 'https://react-star-wars.netlify.com/'
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
    demoUrl: 'https://williamsfuller.com/projects/react-weather/'
  },
  {
    id: 'ghost-jack-entertainment',
    title: 'GhostJack Entertainment',
    description: 'Single page client site using HTML, Sass, and jQuery',
    image: ghostJackEntertainment,
    demoUrl: 'http://ghostjackent.com/'
  },
  {
    id: 'angular-pokedex',
    title: 'Angular-Pokedex',
    description: 'Angular 1 application powered by the Pokedex API',
    image: angularPokedex,
    demoUrl: 'https://www.williamsfuller.com/projects/angular-pokedex/'
  },
  {
    id: 'movie-finder',
    title: 'Movie Finder',
    description: 'Single page site using HTML, Sass, and jQuery to fetch data from themoviedb.org',
    image: movieFinder,
    demoUrl: 'https://www.williamsfuller.com/projects/movieFinder/'
  },
  {
    id: 'uwatch',
    title: 'uWatch',
    description: 'Single page site using HTML, Sass, jQuery, and Bootstrap',
    image: uWatch,
    demoUrl: 'https://www.williamsfuller.com/projects/uWatch/'
  }
];
