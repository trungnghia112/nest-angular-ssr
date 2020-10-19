import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { SharedAppModule } from '@shared/shared.module';


@NgModule({
  declarations: [PostsDetailComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedAppModule
  ]
})
export class PostsModule {
}
