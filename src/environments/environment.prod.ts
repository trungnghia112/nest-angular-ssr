const packageJson = require('../../package.json');

export const environment = {
  production: true,
  envName: 'PROD',
  i18nPrefix: '',
  appName: 'Angular Cli Seed',
  appShortName: 'angular',
  appPrefix: 'ACS',
  domain: {
    app: 'https://nest-angular-ssr-sqzya5stma-uc.a.run.app'
  },
  // API: 'http://blog-wp.local/wp-json/wp/v2',
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
