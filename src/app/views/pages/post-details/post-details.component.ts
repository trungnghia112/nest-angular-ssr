import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  sub: Subscription;
  id: string;
  post: any;

  constructor(private route: ActivatedRoute,
              private afs: AngularFirestore) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params: Params) => {
      const urlArr = params.slug.split('-');
      this.id = urlArr[urlArr.length - 1];
      this.getData();
    });
  }

  async getData() {
    this.post = await this.afs.doc(`posts/${this.id}`).valueChanges()
      .pipe(take(1))
      .toPromise();
  }

}
