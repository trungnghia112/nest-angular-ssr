import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from '@pages/pages.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./views/pages/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'customers',
        loadChildren: () => import('./views/pages/customers/customers.module').then(m => m.CustomersModule),
      },
      // {path: '', redirectTo: 'home', pathMatch: 'full'},
    ],
  },
  {path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
