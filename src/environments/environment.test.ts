// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const packageJson = require('../../package.json');

export const environment = {
  production: false,
  envName: 'DEV',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
