import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedAppModule } from '@shared/shared.module';
import { PartialsAvatarComponent } from './general/avatar/avatar.component';
import { PartialsBadgeStatusComponent } from './general/badge-status/badge-role.component';
import { PartialsListTagsComponent } from './list-tags/list-tags.component';
import { PartialsLatestPostsComponent } from './latest-posts/latest-posts.component';
import { PartialsFbLikeBoxComponent } from './fb-like-box/fb-like-box.component';

const partialsComponent = [
  PartialsAvatarComponent,
  PartialsBadgeStatusComponent,
  PartialsListTagsComponent,
  PartialsLatestPostsComponent,
  PartialsFbLikeBoxComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedAppModule,
  ],
  declarations: [
    ...partialsComponent,
  ],
  exports: [
    ...partialsComponent,
  ],
  providers: []
})
export class PartialsModule {
}
