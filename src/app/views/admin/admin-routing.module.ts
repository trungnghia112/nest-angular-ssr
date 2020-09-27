import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
// import { AuthGuard } from '@core/services/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: AdminComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.AdminDashboardModule),
      },
      {
        path: 'posts',
        loadChildren: () => import('./posts/posts.module').then(m => m.AdminPostsModule),
      },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
