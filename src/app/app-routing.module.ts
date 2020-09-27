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
        path: 'p',
        loadChildren: () => import('./views/pages/post-details/post-details.module').then(m => m.PostDetailsModule),
      },
      {
        path: 'v',
        loadChildren: () => import('./views/pages/video-details/video-details.module').then(m => m.VideoDetailsModule),
      },
      {
        path: 'vlog',
        loadChildren: () => import('./views/pages/vlog/vlog.module').then(m => m.VlogModule),
      },
      {
        path: 'blog',
        loadChildren: () => import('./views/pages/blog/blog.module').then(m => m.BlogModule),
      },
      {
        path: 'dev',
        loadChildren: () => import('./views/pages/dev/dev.module').then(m => m.DevModule),
      },
      {
        path: 'about',
        loadChildren: () => import('./views/pages/about/about.module').then(m => m.AboutModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./views/pages/contact/contact.module').then(m => m.ContactModule),
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
