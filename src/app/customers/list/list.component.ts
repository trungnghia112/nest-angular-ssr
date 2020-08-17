import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { CustomerDataService } from '../customer-data.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CustomersListComponent implements OnInit {

  constructor(private seo: SeoService,
              public data: CustomerDataService) {
  }

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Customer List',
      description: 'A list filled with customers'
    });
    this.data.subscribeToCustomers();
  }

}
