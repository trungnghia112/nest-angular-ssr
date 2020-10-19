import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@core/services/api.service';
import { CategoriesService } from '@pages/categories/categories.service';
import { Observable, Subscription } from 'rxjs';
import { PostsService } from '@pages/posts/posts.service';
import { Constants } from '@core/configs/constants';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  slug: string;
  category$: Observable<any>;
  category: any;

  posts: any[] = null;
  postsList$: Observable<any>;

  //
  total: number;
  current: number;
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private http: ApiService,
              private CategoriesService: CategoriesService,
              private postsService: PostsService) {
    this.postsList$ = this.postsService.postsList$;
  }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getData() {
    // Can access route resolver data with ActivatedRoute route service
    this.sub = this.route.data.pipe(
      map(v => {
        return v.data;
      }),
      switchMap((category: any) => {
        console.log(category);
        this.total = category.count;
        this.posts = [];
        this.current = 1;
        this.category = category;
        this.postsService.clearPostList();
        return this.postsService.postsByCategoryId(category.id);
      })
    ).subscribe();
  }

  async getPosts() {
    this.current = this.current + 1;
    await this.postsService.postsByCategoryId(this.category.id, this.current).toPromise();
  }

  onScroll() {
    if (this.total > this.current * Constants.pagination.perPage) {
      this.getPosts();
    }
  }

  trackByFn(index) {
    return index;
  }
}
