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
  // API: 'http://blog-wp.local/wp-json',
  API: 'https://starbiz.net/wp-json',
  versions: {
    app: packageJson.version
  },
  firebaseConfig: {
    apiKey: 'AIzaSyD6h91AYrTsn-a4eMFSVbbnQk38jdpDVAo',
    authDomain: 'pwa-app-6924d.firebaseapp.com',
    databaseURL: 'https://pwa-app-6924d.firebaseio.com',
    projectId: 'pwa-app-6924d',
    storageBucket: 'pwa-app-6924d.appspot.com',
    messagingSenderId: '911866464392',
    appId: '1:911866464392:web:c581cdd0849a223a'
  },
  wordpress: {
    // headerMenu: 'primary',
    headerMenu: 'td-demo-header-menu'
  },
  facebook: {
    appId: '1784284158379246',
    fanpage: 'https://www.facebook.com/Gamologi/'
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
