import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Constants } from '@core/configs/constants';
import { AsideMenuService } from './aside-menu.service';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AsideMenuComponent implements OnInit {
  items: MenuItem[];

  constructor(public asideMenuService:AsideMenuService) {

  }

  ngOnInit() {
    this.items = Constants.asideMenu;
  }

}
