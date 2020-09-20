import { Component, Inject, OnInit } from '@angular/core';
// import { SwUpdate } from '@angular/service-worker';
import { NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-seed';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    // private updates: SwUpdate,
    private router: Router,
  ) {
    /*this.updates.available.subscribe(() => {
      // if (confirm('New version available. Load New Version?')) {
      updates.activateUpdate().then(() => document.location.reload());
      // }
    });*/
  }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator

        this.document.body.scrollTop = 0;
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
  }
}
