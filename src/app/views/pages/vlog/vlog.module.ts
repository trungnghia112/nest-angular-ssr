import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VlogRoutingModule } from './vlog-routing.module';
import { VlogComponent } from './vlog.component';


@NgModule({
  declarations: [VlogComponent],
  imports: [
    CommonModule,
    VlogRoutingModule
  ]
})
export class VlogModule { }
