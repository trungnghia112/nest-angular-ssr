import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from '@pages/pages.component';
import { ErrorPageComponent } from '@pages/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'error/403',
        component: ErrorPageComponent,
        data: {
          type: 'error-v6',
          code: 403,
          title: '403... Access forbidden',
          desc: 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator'
        }
      },
      {path: 'error/:type', component: ErrorPageComponent},
      {
        path: 'p',
        loadChildren: () => import('./views/pages/posts/posts.module').then(m => m.PostsModule)
      },
      {
        path: 'c',
        loadChildren: () => import('./views/pages/categories/categories.module').then(m => m.CategoriesModule)
      },
      {
        path: 'about-me',
        loadChildren: () => import('./views/pages/single-page/single-page.module').then(m => m.SinglePageModule)
      }
      // {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      // {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  },

  {path: '**', redirectTo: 'error/403', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
