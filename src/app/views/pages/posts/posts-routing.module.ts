import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsDetailComponent } from '@pages/posts/posts-detail/posts-detail.component';
import { PostsResolverService } from '@pages/posts/posts-resolver.service';

const routes: Routes = [
  {
    path: ':slug',
    component: PostsDetailComponent,
    resolve: {
      data: PostsResolverService
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
