import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePageRoutingModule } from './single-page-routing.module';
import { SinglePageComponent } from './single-page.component';


@NgModule({
  declarations: [SinglePageComponent],
  imports: [
    CommonModule,
    SinglePageRoutingModule
  ]
})
export class SinglePageModule { }
