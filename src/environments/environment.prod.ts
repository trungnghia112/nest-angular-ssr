const packageJson = require('../../package.json');

export const environment = {
  production: true,
  envName: 'PROD',
  i18nPrefix: '',
  appName: 'Angular Cli Seed',
  appShortName: 'angular',
  appPrefix: 'ACS',
  domain: {
    app: 'http://localhost:4200'
  },
  API: 'http://localhost:8000/api',
  versions: {
    app: packageJson.version
  },
  firebaseConfig: {
    apiKey: 'AIzaSyDJxqyNbx7LP59pfKF30ni5ALoEmdAiIzI',
    authDomain: 'nghiatran-net.firebaseapp.com',
    databaseURL: 'https://nghiatran-net.firebaseio.com',
    projectId: 'nghiatran-net',
    storageBucket: 'nghiatran-net.appspot.com',
    messagingSenderId: '437389995361',
    appId: '1:437389995361:web:c90563d0046a763a6ee920',
    measurementId: 'G-3S3E31R54G'
  }
};
