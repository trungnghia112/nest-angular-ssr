import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@pages/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalProviders: number;
  totalWebsites: number;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
  }

}
