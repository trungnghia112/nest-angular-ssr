import { Component, Input, OnInit } from '@angular/core';
import { User } from '@core/interfaces/user';

@Component({
  selector: 'app-partials-avatar',
  template: `
      <span class="userpic userpic-circle">
      <img width="30" *ngIf="user.photoURL" [src]="user.photoURL" alt="">
      <span *ngIf="!user.photoURL && user.displayName">{{ user.displayName.charAt(0).toUpperCase() }}</span>
    </span>
  `
})
export class PartialsAvatarComponent implements OnInit {
  @Input() user: User;

  constructor() {
  }

  ngOnInit() {
  }

}
