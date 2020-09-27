export const Constants = {
  pagination: {
    perPage: 20
  },
  api: {
    login: '/login'
  },
  message: {
    emptyMessage: 'No Data'
  },
  redirectUrl: '/admin',
  loginUrl: '/admin/login',

  asideMenu: [
    {
      label: 'Dashboard',
      icon: 'flaticon2-protection text-primary',
      routerLink: '/dashboard'
    }
  ],

  currencies: [
    { label: 'USD', value: 'USD' }
  ],

  table: {
    rows: 20,
    rowsPerPageOptions: [10, 20, 50, 100]
  }
};

export const ROUTES: any[] = [
  ...Constants.asideMenu
];
