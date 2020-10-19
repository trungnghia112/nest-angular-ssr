import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsService } from '@core/services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // collapseMenu: boolean;
  data$: Observable<any> = new Observable<any>();

  constructor(private settingsService: SettingsService) {
    this.data$ = this.settingsService.menus$;
  }

  ngOnInit() {
  }
}
