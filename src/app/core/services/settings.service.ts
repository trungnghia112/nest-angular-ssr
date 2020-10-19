import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
import { ApiService } from '@core/services/api.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  menusData = {
    items: [
      {
        title: 'Blog',
        slug: 'blog',
        object: 'category'
      },
      {
        title: 'Vlog',
        slug: 'vlog',
        object: 'category'
      },
      {
        title: 'Dev',
        slug: 'dev',
        object: 'category'
      },
      {
        title: 'Nghĩa là ai?',
        slug: 'about-me',
        object: 'page'
      },
    ]
  };

  menus$: any;
  private menusSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  categories$: any;
  private categoriesSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: ApiService) {
    this.menus$ = this.menusSubject.asObservable().pipe(distinctUntilChanged());
    this.categories$ = this.categoriesSubject.asObservable().pipe(distinctUntilChanged());
  }

  fetch() {
    // const id = 4;
    // return this.http.getAPI(`/wp-api-menus/v2/menus/${id}`).pipe(
    //   tap(res => {
    //     this.menusSubject.next(res);
    //   })
    // );

    // const dataOb: any = of(this.menusData);
    const dataOb: any = this.http.getAPI(`/menus/v1/menus/${environment.wordpress.headerMenu}`);

    return dataOb.pipe(
      map((res: any) => {
        // console.log(res);
        return res.items;
      }),
      tap((res: any[]) => {
        this.menusSubject.next(res);
        const categoriesData = [];
        res.forEach(v => {
          if (v.object === 'category') {
            categoriesData.push(v);
          }
        });
        this.categoriesSubject.next(categoriesData);
      })
    );
  }
}
