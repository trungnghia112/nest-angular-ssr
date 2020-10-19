import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from '@pages/posts/posts.service';
import { catchError, map, tap } from 'rxjs/operators';
import { SeoService } from '@core/services/seo.service';
import { CategoriesService } from '@pages/categories/categories.service';
import Libs from '@shared/utils/libs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesResolverService implements Resolve<any> {
  constructor(private router: Router,
              private categoriesService: CategoriesService,
              private postsService: PostsService,
              private seo: SeoService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.categoriesService.get(route.params['slug'])
      .pipe(
        map(categories => categories[0]),
        tap(
          (category: any) => {
            // console.log(category);
            const tags: any = {
              title: Libs.fromHtmlEntities(category.name),
              description: Libs.fromHtmlEntities(category.description),
            };
            // if (post._embedded && post._embedded['wp:featuredmedia']) {
            //   tags.image = post._embedded['wp:featuredmedia']['0'].source_url;
            // }
            //
            this.seo.generateTags(tags);
          }
        ),
        catchError((err) => this.router.navigateByUrl('/'))
      );
  }
}
