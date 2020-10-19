import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from '@pages/posts/posts.service';
import { catchError, map, tap } from 'rxjs/operators';
import { SeoService } from '@core/services/seo.service';
import Libs from '@shared/utils/libs';

@Injectable({
  providedIn: 'root'
})
export class PostsResolverService implements Resolve<any> {
  constructor(private router: Router,
              private postsService: PostsService,
              private seo: SeoService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.postsService.get(route.params['slug'])
      .pipe(
        map(posts => posts[0]),
        tap(
          (post: any) => {
            // console.log(post);
            const tags: any = {
              title: Libs.fromHtmlEntities(post.title.rendered),
              description: Libs.fromHtmlEntities(post.excerpt.rendered.replace(/<\/?[^>]+>/ig, ' ')),
            };
            if (post._embedded && post._embedded['wp:featuredmedia']) {
              tags.image = post._embedded['wp:featuredmedia']['0'].source_url;
            }

            this.seo.generateTags(tags);
          }
        ),
        catchError((err) => this.router.navigateByUrl('/'))
      );
  }
}
