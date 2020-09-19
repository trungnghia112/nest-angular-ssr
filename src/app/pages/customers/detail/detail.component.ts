import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { CustomerDataService } from '../customer-data.service';
import { tap } from 'rxjs/operators';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class CustomersDetailComponent implements OnInit {

  customerId: string;
  customer: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private seo: SeoService,
    public data: CustomerDataService
  ) {
  }

  ngOnInit() {
    this.customerId = this.route.snapshot.paramMap.get('id');

    // this.customer = this.db
    //   .collection('customers')
    //   .doc<any>(customerId)
    //   .valueChanges()
    this.customer = this.data.getCustomer(this.customerId)
      .pipe(
        tap(cust =>
          this.seo.generateTags({
            title: cust.name,
            description: cust.bio,
            image: cust.image,
          })
        )
      );
  }
}
