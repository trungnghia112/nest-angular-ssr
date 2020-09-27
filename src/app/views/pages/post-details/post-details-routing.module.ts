import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from '@pages/post-details/post-details.component';

const routes: Routes = [
  {
    path: ':slug',
    component: PostDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostDetailsRoutingModule {
}
