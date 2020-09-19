import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './list/list.component';
import { CustomersDetailComponent } from './detail/detail.component';


const routes: Routes = [
  {path: '', component: CustomersListComponent},
  {path: ':id', component: CustomersDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {
}
