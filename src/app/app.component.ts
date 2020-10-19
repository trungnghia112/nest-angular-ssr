import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { SettingsService } from '@core/services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-cli-seed';
  loadingIndicator: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any,
              private router: Router,
              private settingsService: SettingsService) {
    this.settingsService.fetch().subscribe();
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.loadingIndicator = true;
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.loadingIndicator = false;

        if (isPlatformBrowser(this.platformId)) {
          const elmnt = document.getElementById('site_wrapper');
          elmnt.scrollIntoView();
        }
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
  }
}
