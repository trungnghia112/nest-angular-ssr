import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PartialsModule } from '@pages/partials/partials.module';


@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    PartialsModule
  ]
})
export class BlogModule {
}
