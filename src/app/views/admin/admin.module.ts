import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { AdminPartialsModule } from './partials/partials.module';
import { AdminAsideMenuService } from './partials/aside-menu/aside-menu.service';
import { DirectivesModule } from '@shared/directives/directives.module';
import { AdminDashboardModule } from './dashboard/dashboard.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminPartialsModule,
    DirectivesModule,
    AdminDashboardModule,
    ConfirmDialogModule
  ],
  providers: [
    AdminAsideMenuService,
    ConfirmationService
  ]
})
export class AdminModule {
}
