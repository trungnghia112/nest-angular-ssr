import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  appName = env.appName;
  year = new Date().getFullYear();

  constructor() {
  }

  ngOnInit() {
  }

}
