import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../shared/pipes/pipes.module';


@NgModule({
  declarations: [AdminComponent, PostListComponent, PostEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    QuillModule.forRoot(),
    FormsModule,
    PipesModule
  ]
})
export class AdminModule { }
