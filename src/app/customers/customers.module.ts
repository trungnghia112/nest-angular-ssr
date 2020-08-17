import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './list/list.component';
import { CustomersDetailComponent } from './detail/detail.component';
import { CustomersRoutingModule } from './customers-routing.module';



@NgModule({
  declarations: [CustomersListComponent, CustomersDetailComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
