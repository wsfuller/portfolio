// Dark Remnants Podcast
const darkRemnantsPodcastHeroBg = require('../../assets/images/projects/dark-remnants-podcast/hero-bg.jpg');
const darkRemnantsPodcastHeroLogo = require('../../assets/images/projects/dark-remnants-podcast/hero-logo.svg');
// React Weather
const reactWeatherHeroBg = require('../../assets/images/projects/react-weather/hero-bg.jpg');
const reactWeatherHeroLogo = require('../../assets/images/projects/react-weather/hero-logo.svg');
const reactWeatherSnapshot = require('../../assets/images/projects/react-weather/snapshot.png');
const reactWeatherSnapshot2x = require('../../assets/images/projects/react-weather/snapshot@2x.png');

// const reactStarWars = {};

const DarkRemnantsPodcast = {
  name: 'Dark Remnants',
  demoUrl: 'http://dark-remnants-podcast.herokuapp.com/',
  releaseDate: 'Late 2017',
  images: {
    hero: {
      logo: darkRemnantsPodcastHeroLogo,
      background: darkRemnantsPodcastHeroBg
    },
    snapShot: 'assets/images/projects/react-weather/hero.jpg',
    tools: [
      {
        icon: 'assets/images/icons/react.svg',
        name: 'React'
      },
      {
        icon: 'assets/images/icons/redux.svg',
        name: 'Redux'
      }
    ]
  },
  description:
    'ReactWeather is a small React + Redux application that is linked to the OpenWeatherMap API. A user is able to search by US city and state to get local weather information like tempature, humidity, cloud coverage, etc. Google Maps API was also integrated and changes according to the user search specifications. The primary reason for creating this project was to learn about the Container > Component pattern in React. The idea is to create Containers that handle getting data and passing that into Components that handle the presentation of received data. This was also a chance to use and become more familiar with the Material-UI framework which as a lot of great components to work with and of course continue using Material Design.'
};

const ReactWeather = {
  name: 'React Weather',
  demoUrl: 'http://williamsfuller.com/projects/react-weather',
  releaseDate: 'Late 2017',
  images: {
    hero: {
      logo: reactWeatherHeroLogo,
      background: reactWeatherHeroBg
    },
    snapShots: {
      default: reactWeatherSnapshot,
      at2x: reactWeatherSnapshot2x
    },
    tools: [
      {
        icon: 'assets/images/icons/react.svg',
        name: 'React'
      },
      {
        icon: 'assets/images/icons/redux.svg',
        name: 'Redux'
      }
    ]
  },
  description:
    'ReactWeather is a small React + Redux application that is linked to the OpenWeatherMap API. A user is able to search by US city and state to get local weather information like tempature, humidity, cloud coverage, etc. Google Maps API was also integrated and changes according to the user search specifications. The primary reason for creating this project was to learn about the Container > Component pattern in React. The idea is to create Containers that handle getting data and passing that into Components that handle the presentation of received data. This was also a chance to use and become more familiar with the Material-UI framework which as a lot of great components to work with and of course continue using Material Design.'
};

module.exports = {
  DarkRemnantsPodcast,
  ReactWeather
};
