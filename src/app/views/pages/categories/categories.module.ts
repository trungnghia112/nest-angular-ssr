import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { SharedAppModule } from '@shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PartialsModule } from '@partials/partials.module';


@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedAppModule,
    InfiniteScrollModule,
    PartialsModule
  ]
})
export class CategoriesModule {
}
