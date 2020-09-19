import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  data$: any;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit(): void {
    this.data$ = this.afs.collection('posts').valueChanges({idField: 'id'});
  }

}
