import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Constants } from '@core/configs/constants';
import { AdminAsideMenuService } from './aside-menu.service';

@Component({
  selector: 'app-admin-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminAsideMenuComponent implements OnInit {
  items: MenuItem[];

  constructor(public asideMenuService: AdminAsideMenuService) {

  }

  ngOnInit() {
    this.items = Constants.asideMenu;
  }

}
