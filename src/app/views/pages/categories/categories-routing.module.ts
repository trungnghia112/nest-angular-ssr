import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '@pages/categories/categories.component';
import { CategoriesResolverService } from '@pages/categories/categories-resolver.service';

const routes: Routes = [
  {
    path: ':slug',
    component: CategoriesComponent,
    resolve: {
      data: CategoriesResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {
}
