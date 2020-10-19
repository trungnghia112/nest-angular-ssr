import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@core/services/api.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit {
  slug: string;
  relatedPosts: any[] = null;

  post$: Observable<any>;

  constructor(private route: ActivatedRoute,
              private http: ApiService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    // Can access route resolver data with ActivatedRoute route service
    this.post$ = this.route.data.pipe(
      map(v => v.data),
      tap(async (post: any) => {
        if (post.tags.length) {
          const relatedPosts: any = await this.http.get(`/posts?_embed&per_page=6&tags=${post.tags[0]}`).toPromise();
          if (relatedPosts) {
            // console.log(relatedPosts);
            this.relatedPosts = relatedPosts;
          }
        } else {
          this.relatedPosts = [];
        }
      })
    );
  }
}
