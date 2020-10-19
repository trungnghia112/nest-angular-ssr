import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit, OnDestroy {

  isCollapsed = true;

  constructor(private router: Router,
              @Inject(PLATFORM_ID) private platformId: any) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const html = document.getElementsByTagName('html')[0];
      html.classList.add('auth-layout');
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('bg-default');
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      const html = document.getElementsByTagName('html')[0];
      html.classList.remove('auth-layout');
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('bg-default');
    }
  }
}
