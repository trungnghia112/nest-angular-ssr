import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  data$: any;

  constructor(private afs: AngularFirestore,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.data$ = this.afs
      .collection('posts', ref => ref
        .where('categoriesUsed.blog', '==', true)
        .limit(20))
      .valueChanges({idField: 'id'});
  }
}
