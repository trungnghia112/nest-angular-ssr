import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { LocalStorageService } from '@core/services/local-storage.service';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AsideMenuService {
  private menuItemsSubject = new BehaviorSubject<MenuItem[]>([]);
  public menuItems$ = this.menuItemsSubject.asObservable().pipe(distinctUntilChanged());

  constructor(@Inject(PLATFORM_ID) private platformId: any,
              private localStorageService: LocalStorageService) {
    if (isPlatformBrowser(this.platformId)) {
      const body = document.getElementsByTagName('body')[0];
      if (this.localStorageService.getItem('aside-menu-collapse')) {
        body.classList.add('aside-menu-collapse');
      } else {
        body.classList.remove('aside-menu-collapse');
      }
    }
  }

  setMenu(items: MenuItem[]) {
    this.menuItemsSubject.next(items);
  }

  collapse(collapse: boolean = false) {
    if (isPlatformBrowser(this.platformId)) {
      const body = document.getElementsByTagName('body')[0];
      if (!collapse) {
        this.localStorageService.setItem('aside-menu-collapse', true);
        body.classList.add('aside-menu-collapse');
      } else {
        this.localStorageService.setItem('aside-menu-collapse', false);
        body.classList.remove('aside-menu-collapse');
      }
    }
  }

  show() {
    if (isPlatformBrowser(this.platformId)) {
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('aside-menu-active');
    }
  }

  hide() {
    if (isPlatformBrowser(this.platformId)) {
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('aside-menu-active');
    }
  }
}
