import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailsRoutingModule } from './post-details-routing.module';
import { PostDetailsComponent } from './post-details.component';
import { PartialsModule } from '@pages/partials/partials.module';


@NgModule({
  declarations: [PostDetailsComponent],
  imports: [
    CommonModule,
    PostDetailsRoutingModule,
    PartialsModule
  ]
})
export class PostDetailsModule { }
