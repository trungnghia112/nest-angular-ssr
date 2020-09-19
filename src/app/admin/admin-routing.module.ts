import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';

const routes: Routes = [
  {
    path: 'post',
    component: PostListComponent
  },
  {
    path: 'post/create',
    component: PostEditComponent
  },
  {
    path: 'post/edit/:id',
    component: PostEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
