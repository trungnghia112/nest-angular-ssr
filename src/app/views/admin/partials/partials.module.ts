import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAsideMenuComponent } from './aside-menu/aside-menu.component';
import { PanelMenuModule } from 'primeng/panelmenu';

const adminPartialsArr = [
  AdminAsideMenuComponent
];

@NgModule({
  declarations: [
    ...adminPartialsArr
  ],
  imports: [
    CommonModule,
    PanelMenuModule,
  ],
  exports: [
    ...adminPartialsArr
  ]
})
export class AdminPartialsModule {
}
