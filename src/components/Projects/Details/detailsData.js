// React Star Wars
const elderScrollsLegendsHeroBg = require('../../../assets/images/projects/elder-scrolls-legends/hero-bg.jpg');
const elderScrollsLegendsHeroLogo = require('../../../assets/images/projects/elder-scrolls-legends/hero-logo.svg');
const elderScrollsLegendsSnapshot = require('../../../assets/images/projects/elder-scrolls-legends/snapshot.jpg');
const elderScrollsLegendsSnapshot2x = require('../../../assets/images/projects/elder-scrolls-legends/snapshot@2x.jpg');
// React Star Wars
// const reactStarWarsHeroBg = require('../../../assets/images/projects/react-star-wars/hero-bg.jpg');
// const reactStarWarsHeroLogo = require('../../../assets/images/projects/react-star-wars/hero-logo.svg');
// const reactStarWarsSnapshot = require('../../../assets/images/projects/react-star-wars/snapshot.jpg');
// const reactStarWarsSnapshot2x = require('../../../assets/images/projects/react-star-wars/snapshot@2x.jpg');
// Fetch Doggos
const fetchDoggosHeroBg = require('../../../assets/images/projects/fetch-doggos/hero-bg.jpg');
const fetchDoggosHeroLogo = require('../../../assets/images/projects/fetch-doggos/hero-logo.svg');
const fetchDoggosSnapshot = require('../../../assets/images/projects/fetch-doggos/snapshot.jpg');
const fetchDoggosSnapshot2x = require('../../../assets/images/projects/fetch-doggos/snapshot@2x.jpg');
// WSF Resume
const resumeApiHeroBg = require('../../../assets/images/projects/resume-api/hero-bg.jpg');
const resumeApiHeroLogo = require('../../../assets/images/projects/resume-api/hero-logo.svg');
const resumeApiSnapshot = require('../../../assets/images/projects/resume-api/snapshot.jpg');
const resumeApiSnapshot2x = require('../../../assets/images/projects/resume-api/snapshot@2x.jpg');
// Dark Remnants Podcast
const darkRemnantsPodcastHeroBg = require('../../../assets/images/projects/dark-remnants-podcast/hero-bg.jpg');
const darkRemnantsPodcastHeroLogo = require('../../../assets/images/projects/dark-remnants-podcast/hero-logo.svg');
const darkRemnantsPodcastSnapshot = require('../../../assets/images/projects/dark-remnants-podcast/snapshot.jpg');
const darkRemnantsPodcastSnapshot2x = require('../../../assets/images/projects/dark-remnants-podcast/snapshot@2x.jpg');
// React Weather
const reactWeatherHeroBg = require('../../../assets/images/projects/react-weather/hero-bg.jpg');
const reactWeatherHeroLogo = require('../../../assets/images/projects/react-weather/hero-logo.svg');
const reactWeatherSnapshot = require('../../../assets/images/projects/react-weather/snapshot.jpg');
const reactWeatherSnapshot2x = require('../../../assets/images/projects/react-weather/snapshot@2x.jpg');
// Ghost Jack Entertainment
// const ghostJackEntertainmentHeroBg = require('../../../assets/images/projects/ghost-jack-entertainment/hero-bg.jpg');
// const ghostJackEntertainmentHeroLogo = require('../../../assets/images/projects/ghost-jack-entertainment/hero-logo.svg');
// const ghostJackEntertainmentSnapshot = require('../../../assets/images/projects/ghost-jack-entertainment/snapshot.jpg');
// const ghostJackEntertainmentSnapshot2x = require('../../../assets/images/projects/ghost-jack-entertainment/snapshot@2x.jpg');
// Movie Finder
const movieFinderHeroBg = require('../../../assets/images/projects/movie-finder/hero-bg.jpg');
const movieFinderHeroLogo = require('../../../assets/images/projects/movie-finder/hero-logo.svg');
const movieFinderSnapshot = require('../../../assets/images/projects/movie-finder/snapshot.jpg');
const movieFinderSnapshot2x = require('../../../assets/images/projects/movie-finder/snapshot@2x.jpg');
// uWatch
// const uWatchHeroBg = require('../../../assets/images/projects/uwatch/hero-bg.jpg');
// const uWatchHeroLogo = require('../../../assets/images/projects/uwatch/hero-logo.svg');
// const uWatchSnapshot = require('../../../assets/images/projects/uwatch/snapshot.jpg');
// const uWatchSnapshot2x = require('../../../assets/images/projects/uwatch/snapshot@2x.jpg');

const ElderScrollsLegends = {
  name: 'Elder Scrolls Legends',
  demoUrl: 'https://elder-scrolls-legends.netlify.com/',
  gitHubUrl: 'https://github.com/wsfuller/elder-scrolls-legends',
  releaseDate: 'Early - Mid 2020',
  images: {
    hero: {
      logo: elderScrollsLegendsHeroLogo,
      background: elderScrollsLegendsHeroBg
    },
    snapShots: {
      default: elderScrollsLegendsSnapshot,
      at2x: elderScrollsLegendsSnapshot2x
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
    'The goal of this project is to build a visually appealing, modern responsive front end application. The application connects into the Elder Scrolls Legends API for data retrieval. Users are then able to infinitely scroll through the card data and fuzzy search by card names. <br /><br /> This application was built with React using Create React App. State management and data retrieval with React Hooks. The user interface is built with the React Material UI framework and deployed on Netlify.',
  gaEventLabels: {
    demo: 'Elder Scrolls Legends Demo',
    github: 'Elder Scrolls Legends GitHub'
  },
  metrics: {
    lighthouse: {
      performance: 98,
      accessibility: 100,
      bestPractices: 87,
      seo: 100
    }
  }
};

// const ReactStarWars = {
//   name: 'React Star Wars',
//   demoUrl: 'https://react-star-wars.netlify.com/',
//   gitHubUrl: 'https://github.com/wsfuller/react-star-wars',
//   releaseDate: 'Mid 2019',
//   images: {
//     hero: {
//       logo: reactStarWarsHeroLogo,
//       background: reactStarWarsHeroBg
//     },
//     snapShots: {
//       default: reactStarWarsSnapshot,
//       at2x: reactStarWarsSnapshot2x
//     },
//     tools: [
//       {
//         icon: 'assets/images/icons/react.svg',
//         name: 'React'
//       },
//       {
//         icon: 'assets/images/icons/redux.svg',
//         name: 'Redux'
//       }
//     ]
//   },
//   description:
//     'React Star Wars is a simple application built with React, Apollo Client, GraphQL, and the Star Wars API (aka SWAPI). Originally built with using the RESTful version of SWAPI this app quickly pivoted to the GraphCMS SWAPI GraphQL port. GraphQL was ultimately chosen over the traditional RESTful service because of the ability to build out profiles in a single HTTP request versus several. <br /><br /> On top of the other tools mentioned, the UI was built using Material-UI with JSS for a completely JavaScript driven application.',
//   gaEventLabels: {
//     demo: 'React Star Wars Demo',
//     github: 'React Star Wars GitHub'
//   },
//   metrics: {
//     lighthouse: {
//       performance: 96,
//       accessibility: 91,
//       bestPractices: 93,
//       seo: 100
//     }
//   }
// };

const FetchDoggos = {
  name: 'FetchDoggos',
  demoUrl: 'https://fetch-doggos.netlify.com/',
  gitHubUrl: 'https://github.com/wsfuller/fetchDoggos',
  releaseDate: 'Mid 2019',
  images: {
    hero: {
      logo: fetchDoggosHeroLogo,
      background: fetchDoggosHeroBg
    },
    snapShots: {
      default: fetchDoggosSnapshot,
      at2x: fetchDoggosSnapshot2x
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
    'One day at the dog park playing with Remy, my Boston Terrier, I wondered if there was an API for dogs. To my surprise there was the DOG API from dog.ceo that would allow users to search for random dog images. <br/><br/>The goal of this project was to create a project working more with forms and experiment with a new framework, Semantic UI React.<br/><br/>FetchDoggos is built using React, Redux, Semantic UI React, Styled Components, GitHub, and Netlify.',
  gaEventLabels: {
    demo: 'FetchDoggos Demo',
    github: 'FetchDoggos GitHub'
  },
  metrics: {
    lighthouse: {
      performance: 94,
      accessibility: 83,
      bestPractices: 93,
      seo: 80
    }
  }
};

const ResumeApi = {
  name: 'Resume API',
  demoUrl: 'https://wsf-resume-api.herokuapp.com/',
  gitHubUrl: 'https://github.com/wsfuller/resume-api',
  releaseDate: 'Mid 2019',
  images: {
    hero: {
      logo: resumeApiHeroLogo,
      background: resumeApiHeroBg
    },
    snapShots: {
      default: resumeApiSnapshot,
      at2x: resumeApiSnapshot2x
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
    'I wanted to create a fun and simple API using Node and mongoDB to step up my back end technology skills. I decided it would be fun to take my resume and make it into an API. In doing so I was able to leverage Node, Express, mLab, and Heroku to deploy an API that anyone can make GET requests to. The API includes endpoints for personal, technology, experience, and education information',
  gaEventLabels: {
    demo: 'Resume API Demo',
    github: 'Resume API GitHub'
  }
};

const DarkRemnantsPodcast = {
  name: 'Dark Remnants',
  demoUrl: 'http://dark-remnants-podcast.herokuapp.com/',
  gitHubUrl: 'https://github.com/wsfuller/dark-remnants-podcast',
  releaseDate: 'Mid 2018',
  images: {
    hero: {
      logo: darkRemnantsPodcastHeroLogo,
      background: darkRemnantsPodcastHeroBg
    },
    snapShots: {
      default: darkRemnantsPodcastSnapshot,
      at2x: darkRemnantsPodcastSnapshot2x
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
    'Dark Remnants Podcast, or DRP for short, is a Podcast about scary and odd tales realized and narrated by Fred Knoop. The intent for this site is to create a portal for fans to have access to everything DRP. Connect on social media or listen to episodes on Apple Podcasts, Google Play, or SoundCloud. <br /><br /> This was a complete redesign and build of the previous DRP site. The project was created using Create React App, Sass, and deployed using Heroku web services. Much inspiration was drawn from the previous sites vision. Using that vision it was further powered on by the photography taken by Fred Knoop, and fully realized while listening to some tales. This site is meant to take on a clean and dark twist to modern Web UI design.',
  gaEventLabels: {
    demo: 'Dark Remnants Podcast Demo',
    github: 'Dark Remnants Podcast GitHub'
  },
  metrics: {
    lighthouse: {
      performance: 88,
      accessibility: 96,
      bestPractices: 80,
      seo: 91
    }
  }
};

const ReactWeather = {
  name: 'ReactWeather',
  demoUrl: 'https://wsf-react-weather.netlify.com/',
  gitHubUrl: 'https://github.com/wsfuller/react-weather',
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
    'ReactWeather is a small React + Redux application that is linked to the OpenWeatherMap API. A user is able to search by US city and state to get local weather information like tempature, humidity, cloud coverage, etc. Google Maps API was also integrated and changes according to the user search specifications.</br></br> The primary reason for creating this project was to learn about the Container > Component pattern in React. The idea is to create Containers that handle getting data and passing that into Components that handle the presentation of received data. This was also a chance to use and become more familiar with the Material-UI framework which as a lot of great components to work with and of course continue using Material Design.',
  gaEventLabels: {
    demo: 'React Weather Demo',
    github: 'React Weather GitHub'
  },
  metrics: {
    lighthouse: {
      performance: 94,
      accessibility: 78,
      bestPractices: 100,
      seo: 100
    }
  }
};

// const GhostJackEntertainment = {
//   name: 'Ghost Jack Entertainment',
//   demoUrl: 'https://ghostjackent.com/',
//   gitHubUrl: 'https://github.com/wsfuller/ghostjack',
//   releaseDate: 'Mid 2016',
//   images: {
//     hero: {
//       logo: ghostJackEntertainmentHeroLogo,
//       background: ghostJackEntertainmentHeroBg
//     },
//     snapShots: {
//       default: ghostJackEntertainmentSnapshot,
//       at2x: ghostJackEntertainmentSnapshot2x
//     },
//     tools: [
//       {
//         icon: 'assets/images/icons/react.svg',
//         name: 'React'
//       },
//       {
//         icon: 'assets/images/icons/redux.svg',
//         name: 'Redux'
//       }
//     ]
//   },
//   description:
//     'Movie Finder was a personal project to start learning APIs. The goal of this project was to provide a user input and retrieve a primary movie poster, title, and description as well as other related movie titles and posters. If a poster is not available a placeholder will be put in place of the broken image. Using The MovieDB I was able to create an API token and submit GET requests using jQuery to their API. <br/><br/>This application was built using jQuery for all the AJAX requests and using newly learned Sass. This was an incredible learning experience and something that can be expanded on greatly with deeper functionality using new frameworks like Angular or React.',
//   gaEventLabels: {
//     demo: 'Ghost Jack Entertainment Demo',
//     github: 'Ghost Jack Entertainment GitHub'
//   }
// };

const MovieFinder = {
  name: 'Movie Finder',
  demoUrl: 'https://wsf-moviefinder.netlify.app/',
  gitHubUrl: 'https://github.com/wsfuller/MovieFinder',
  releaseDate: 'Mid 2021',
  images: {
    hero: {
      logo: movieFinderHeroLogo,
      background: movieFinderHeroBg
    },
    snapShots: {
      default: movieFinderSnapshot,
      at2x: movieFinderSnapshot2x
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
    'MovieFinder is a small React + Redux application using TypeScript and Microsoft\'s Fluent UI. This app\'s data is accessed by using The Movie Database API. The goal of this application is to have users explore movie titles and add those titles to a "watch later list" which stores a small bit of data in localStorage for cacheing purposes. Event tracking is also incorporated using Google Tag Manager to help better understand user behanvior through Google Universal Analytics',
  gaEventLabels: {
    demo: 'Movie Finder Demo',
    github: 'Movie Finder GitHub'
  },
  metrics: {
    lighthouse: {
      performance: 92,
      accessibility: 90,
      bestPractices: 93,
      seo: 100
    }
  }
};

// const Uwatch = {
//   name: 'uWatch',
//   demoUrl: 'https://wsfuller.github.io/uWatch/',
//   gitHubUrl: 'https://github.com/wsfuller/uWatch',
//   releaseDate: 'Late 2013',
//   images: {
//     hero: {
//       logo: uWatchHeroLogo,
//       background: uWatchHeroBg
//     },
//     snapShots: {
//       default: uWatchSnapshot,
//       at2x: uWatchSnapshot2x
//     },
//     tools: [
//       {
//         icon: 'assets/images/icons/react.svg',
//         name: 'React'
//       },
//       {
//         icon: 'assets/images/icons/redux.svg',
//         name: 'Redux'
//       }
//     ]
//   },
//   description:
//     'For one of my courses at the AICSF, Emerging Technologies, we were assigned a project to develop a site showcasing a bleeding edge product. With all the hype around the Apple Watch that was rumored to be coming out for quite awhile at that time, my partner for the project and I decided to do the ultimate smart watch. This was a great experience in really working with Bootstrap and font icons from Font Awesome. <br /><br/>For this project I was tasked with development, wire framing, and technology specifications. The site was designed using Photoshop, built using CSS3, HTML5, Bootstrap, jQuery and PHP. This project really reminds me of the evolution of not only my skills but the maturing of front end technologies that have taken place over the last several years',
//   gaEventLabels: {
//     demo: 'uWatch Demo',
//     github: 'uWatch GitHub'
//   }
// };

module.exports = {
  ElderScrollsLegends,
  // ReactStarWars,
  FetchDoggos,
  ResumeApi,
  DarkRemnantsPodcast,
  ReactWeather,
  MovieFinder
};
