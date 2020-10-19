import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SeoService } from '@core/services/seo.service';
import { PostsService } from '@pages/posts/posts.service';

@Injectable({
  providedIn: 'root'
})
export class SsrGuard implements CanActivate {
  constructor(private seo: SeoService,
              private postsDetailService: PostsService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // fetching id  from the url
    const slug = route.paramMap.get('slug');

    // calling our API service like we would usually do but instead of a subscribe, we do a pipe map.
    return this.postsDetailService.get(slug).pipe(
      map(
        (posts: any) => {
          const post = posts[0];

          // const title = post.title.rendered.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
          //   return '&#'+i.charCodeAt(0)+';';
          // });

          this.seo.generateTags({
            title: this.fromHtmlEntities(post.title.rendered),
            description: this.fromHtmlEntities(post.excerpt.rendered.replace(/<\/?[^>]+>/ig, ' ')),
            image: post._embedded['wp:featuredmedia']['0'].source_url,
          });
          // the canActivate expect and Observable<boolean> that's why we have to return true here
          return true;
        }
      ));
  }

  /**
   * Create string from HTML entities
   */
  private fromHtmlEntities(str: any) {
    return (str + '').replace(/&#\d+;/gm, (s: any) => {
      return String.fromCharCode(s.match(/\d+/gm)[0]);
    });
  }
}
