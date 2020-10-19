import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// import { PanelMenuModule } from 'primeng/panelmenu';
// import { DialogModule } from 'primeng/dialog';

import { SharedAppModule } from '@shared/shared.module';
import { PartialsModule } from '@partials/partials.module';

import { HeaderComponent } from './header/header.component';
// import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { FooterComponent } from './footer/footer.component';


const layoutComponent = [
  HeaderComponent,
  // AsideMenuComponent,
  FooterComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedAppModule,
    PartialsModule,
    NgbDropdownModule,
    NgbAlertModule,
    // PanelMenuModule,
    // DialogModule
  ],
  declarations: [
    ...layoutComponent,
  ],
  exports: [
    ...layoutComponent
  ]
})
export class LayoutsModule {
}
