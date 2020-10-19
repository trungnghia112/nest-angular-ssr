import { Component, OnInit } from '@angular/core';
import { PostsService } from '@pages/posts/posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-partials-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss']
})
export class PartialsLatestPostsComponent implements OnInit {

  posts$: Observable<any>;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.posts$ = this.postsService.latestPosts();
  }

}
