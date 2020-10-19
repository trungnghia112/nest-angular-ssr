import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '@pages/auth/auth.component';
import { LoginComponent } from '@pages/auth/login/login.component';
import { RegisterComponent } from '@pages/auth/register/register.component';
import { NoAuthGuard } from '@core/services/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [NoAuthGuard],
        data: { title: 'Login' }
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NoAuthGuard],
        data: { title: 'Register' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
