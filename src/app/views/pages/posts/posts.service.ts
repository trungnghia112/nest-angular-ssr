import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { Constants } from '@core/configs/constants';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  data$: any;
  postsList$: any;

  private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private postsListSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: ApiService) {
    this.data$ = this.dataSubject.asObservable().pipe(distinctUntilChanged());
    this.postsList$ = this.postsListSubject.asObservable().pipe(distinctUntilChanged());
  }

  postsByCategoryId(id: number, page: number = 1, per_page: number = Constants.pagination.perPage) {
    return this.http.get(`/posts?categories=${id}&page=${page}&per_page=${per_page}&_embed`).pipe(
      tap((posts: any) => {
        const postsData = this.postsListSubject.value;
        if (postsData) {
          this.postsListSubject.next([...postsData, ...posts]);
        } else {
          this.postsListSubject.next(posts);
        }
        console.log('postsListSubject:', this.postsListSubject.value);
      })
    );
  }

  postsByCategoriesSlug(slug: string, page: number = 1, per_page: number = Constants.pagination.perPage) {
    return this.http.get(`/posts?filter[categories]=${slug}&page=${page}&per_page=${per_page}&_embed`);
  }

  latestPosts() {
    return this.http.get(`/posts?per_page=5&_embed`)
  }

  get(slug: string) {
    return this.http.get(`/posts?slug=${slug}&_embed`);
  }

  clearPostList() {
    this.postsListSubject.next(null);
  }
}
