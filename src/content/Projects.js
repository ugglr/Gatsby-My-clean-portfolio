export const PAGE_CONTENT = {
  JUMBO: {
    title: "Projects Portfolio",
    body:
      "I think the best way of learning is by getting down to coding and build. I really appreciate feedback on anything that I have built!",
  },
}

export const PROJECTS = [
  {
    img: require("../images/portfolio/norban.png"),
    title: "Norban.se App",
    date: "2020-09-01",
    tags: ["work", "mobile", "backend"],
    tech: ["react native", "lottie", "graphql", "apollo", "unstated"],
    description:
      "Mobile application where our the users can follow the sales process of their home, take action to collect more interest and interact with Norban's support team and real-estate agents",
    sourceURL: "https://apps.apple.com/us/app/norban/id1469364245",
    leftButtonText: "Apple App Store",
    hostedURL:
      "https://play.google.com/store/apps/details?id=se.norban.norbanapp",
    rightButtonText: "Google Play Store",
  },
  {
    img: require("../images/portfolio/norban.png"),
    title: "Norban.se web",
    date: "2020-09-01",
    tags: ["work", "frontend", "backend"],
    tech: ["react", "redux", "apollo", "graphql", "SSR", "graphql"],
    description:
      "Norban is making a stand in the Swedish real estate market and has rolled out many new services for customers looking to sell their home. I work on the full stack for our website, backend and CRM solution all employees use on the daily.",
    sourceURL: "https://www.norban.se",
    leftButtonText: "Website",
  },
  {
    img: require("../images/portfolio/storybook.png"),
    title: "React Native Storybook Boilerplate",
    date: "2020-07-28",
    tags: ["frontend", "mobile"],
    tech: [
      "react",
      "react native",
      "react native web",
      "storybook",
      "babel",
      "webpack",
    ],
    description:
      "Building a UI library for React Native together with storybook is a good experience, but it's hard to display the components on the web, therefore I want to transpile the react-native component through the react-native-web project so I can display them easily on the web. It's the ultimate library development setup meant for kickstarting ui library development for react-native.",
    sourceURL: "https://github.com/ugglr/react-native-storybook-boilerplate",
    hostedURL: "https://rn-sb-boilerplate.netlify.app",
  },
  {
    img: require("../images/portfolio/brewtime.png"),
    title: "WIP: Brewtime.",
    date: "2020-03-03",
    tags: ["frontend", "backend", "mobile"],
    tech: [
      "react",
      "react native",
      "expressjs",
      "graphql",
      "apollo-server",
      "styled components",
    ],
    description:
      "Brewtime is a fake work in progress project where I'm learning to build a full cycle, fullstack, web + mobile application. Graphql backend is running Express / Apollo server, frontend is made using react and mobile (iOS/ Android) using react native. Authentication flow will be JWT based.",
    hostedURL: "https://brewtime.app",
    rightButtonText: "Landing Page",
  },
  {
    img: require("../images/portfolio/ignis.png"),
    title: "Ignis by Tiket",
    date: "2020-06-03",
    tags: ["work", "frontend", "mobile"],
    tech: [
      "React Native",
      "React Native Camera",
      "Redux",
      "REST",
      "Styled Components",
    ],
    description:
      "Events inventory management app. This app helps to support Tiket.com ToDo Partners by giving robust functionality in managing their inventory orders. You can easily find customer information and ticket redemption details in real-time. Architected by a beloved tech-lead who sadly departed the team, otherwise I'm the only developer on the apps. iOS coming soon.",
    sourceURL: "https://apps.apple.com/id/app/ignis-by-tiket-com/id1522809152",
    leftButtonText: "Apple App Store",
    hostedURL:
      "https://play.google.com/store/apps/details?id=com.tiketeventsmerchants",
    rightButtonText: "Google Play Store",
  },
  {
    img: "https://miro.medium.com/max/1400/1*xDi2csEAWxu95IEkaNdFUQ.png",
    title: "react-native-value-picker",
    date: "2020-05-18",
    tags: ["backend"],
    tech: ["react-native", "npm", "npm-package"],
    description:
      "The Native picker on Android is a modal / dropdown design which is vastly different from the native iOS picker. In my current project we wanted a design more similar to the iOS native picker, and thus I created this Scroll Picker as a replacement on Android, but it works equally well on iOS for instance as an alternative to @react-native-community/picker native iOS picker module.",
    sourceURL: "https://github.com/ugglr/react-native-value-picker",
    hostedURL: "https://www.npmjs.com/package/react-native-value-picker",
    rightButtonText: "NPM Link",
  },
  {
    img: "https://miro.medium.com/max/1200/0*11eDqY4zA04y2_n6.jpg",
    title: "REST-Express-Mongo-Backend-Boilerplate",
    date: "2020-01-18",
    tags: ["backend"],
    tech: ["expressjs", "rest", "JWT", "mongoose", "mongodb"],
    description:
      "Hit the ground running with this powerful production worthy REST Backend API Boilerplate. Comes with user models, password hashing and sending JWT. Stack: Node, Express, MongoDB+Mongoose.",
    sourceURL:
      "https://github.com/ugglr/REST-Express-Mongo-Backend-Boilerplate",
    hostedURL: "",
  },
  {
    img:
      "https://i2.wp.com/softwareengineeringdaily.com/wp-content/uploads/2018/06/GraphQL.png?resize=730%2C389&ssl=1",
    title: "Graphql-Express-Apollo-Backend-Boilerplate",
    date: "2019-12-31",
    tags: ["backend"],
    tech: ["expressjs", "graphql", "apollo-server", "mongoose", "mongodb"],
    description:
      "Hit the ground running with this powerful production worthy Graphql Backend Boilerplate. Comes with basic user models & resolvers, password hashing etc. Scale-able file-structure.",
    sourceURL:
      "https://github.com/ugglr/Graphql-Express-Apollo-Backend-Boilerplate",
    hostedURL: "",
  },
  {
    img: require("../images/portfolio/16by9/django-rest-react-crud.jpg"),
    title: "Django-React Fullstack Notemanager",
    date: "2019-05-06",
    tags: ["frontend", "backend"],
    tech: ["react", "django", "python", "rest"],
    description:
      "Fullstack REST-API Notemanager app running Django as a backend and react for building the UI. The REST-API is built using the Django Rest API framework and the JSX is served as a single page into Django Template using webpack. Instructions for local setup in repo.",
    sourceURL: "https://github.com/ugglr/django-react-note-manager",
    hostedURL: "",
  },
  {
    img: require("../images/portfolio/16by9/currency-wallet.jpg"),
    title: "Gatsby React Currency Wallet",
    date: "2019-05-03",
    tags: ["frontend"],
    tech: ["react", "material-ui"],
    description:
      "A coding challenge where I was gived the task of creating an electronic wallet holding several currencies. The scaffolding was created using Gatsby.js, the UI components come from Material-UI Library.",
    sourceURL: "https://github.com/ugglr/gatsby-react-currency-wallet-app",
    hostedURL: "https://ugglr.github.io/gatsby-react-currency-wallet-app/",
  },
  {
    img: require("../images/portfolio/16by9/gatsby_starter.jpg"),
    title: "Official Gatsby.js Starter",
    date: "2019-04-19",
    tags: ["frontend"],
    tech: ["gatsby", "react"],
    description:
      "After completing this portfolio site, I forked the project, changed the content to make it into a starter template and got my pull-request accepted into the offical Gatsby.js project in Github. After I also joined the official maintainers team of the project.",
    sourceURL: "https://github.com/ugglr/gatsby-clean-portfolio",
    hostedURL:
      "https://www.gatsbyjs.org/starters/ugglr/gatsby-clean-portfolio/",
  },
  {
    img: require("../images/portfolio/16by9/boendekostnad.jpg"),
    title: "React Mortgage Calculator",
    date: "2019-03-28",
    tags: ["frontend"],
    tech: ["react", "bootstrap4", "material-ui"],
    description:
      "While I was buying my apartment in Sweden, I always made the calculations by hand because I could not find a calculator that gave the whole picture. Tools: create-react-app; Bootstrap4; Material-UI",
    sourceURL: "https://github.com/ugglr/boendekostnad-nu",
    hostedURL: "https://elastic-fermat-01bd5f.netlify.com",
  },
  /*   {
    img: require("../images/portfolio/16by9/image-search.jpg"),
    title: "React Search image-API App",
    date: "2019-03-03",
    description:
      "This app uses Axios to search Pixabay API for images, and displays them in a grid below. Also uses Material-UI pre-built components for some styling.",
    sourceURL: "https://github.com/ugglr/React-Image-Search-API-app",
    hostedURL: "https://priceless-newton-929cda.netlify.com",
  }, */
  {
    img: require("../images/portfolio/16by9/weather-app.jpg"),
    title: "React Weather-API App",
    date: "2019-02-12",
    tags: ["frontend"],
    tech: ["react", "axios", "rest"],
    description:
      "This app uses async-await + fetch to grab weather data from openweathermap.org open API. Bootstrap 4 CSS classes are used for styling",
    sourceURL: "https://github.com/ugglr/react-API-weather-app",
    hostedURL: "https://trusting-mccarthy-495030.netlify.com",
  },
]
