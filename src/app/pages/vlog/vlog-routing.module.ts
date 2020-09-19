import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VlogComponent } from './vlog.component';

const routes: Routes = [
  {
    path: '',
    component: VlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VlogRoutingModule {
}
