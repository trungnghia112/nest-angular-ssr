import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Constants } from '../../partials/constants';

@Component({
  selector: 'app-admin-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class AdminPostsListComponent implements OnInit {
  data$: Observable<any[]>;

  selectedData: any[] = [];
  cols: any[];

  constantsTable = Constants.table;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit(): void {
    this.cols = [
      {field: 'title', header: 'Title'},
    ];

    this.data$ = this.afs.collection('posts').valueChanges({idField: 'id'});
  }

}
