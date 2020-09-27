import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPostsEditComponent } from './posts-edit/posts-edit.component';
import { AdminPostsListComponent } from './posts-list/posts-list.component';
import { AdminTagsListComponent } from './tags-list/tags-list.component';
import { AdminCategoriesListComponent } from './categories-list/categories-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPostsListComponent
  },
  {
    path: 'new',
    component: AdminPostsEditComponent
  },
  {
    path: 'edit/:id',
    component: AdminPostsEditComponent
  },
  {
    path: 'edit-categories',
    component: AdminCategoriesListComponent
  },
  {
    path: 'edit-tags',
    component: AdminTagsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPostsRoutingModule {
}
