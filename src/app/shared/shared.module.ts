import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedBoxLoadingComponent } from './components/box-loading/box-loading.component';
import { SharedBoxNoDataComponent } from './components/box-nodata/box-nodata.component';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
// import { ToastModule } from 'primeng/toast';

// import { SharedCardModule } from './components/card/card.module';
// import { SharedNavTabModule } from './components/nav-tab/nav-tab.module';
// import { SharedTableModule } from './components/table/table.module';

const sharedComponents = [
  SharedBoxLoadingComponent,
  SharedBoxNoDataComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    // Directives
    DirectivesModule,

    // Pipe
    PipesModule,

    // 3rd party

  ],
  declarations: [
    ...sharedComponents
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    // Directives
    DirectivesModule,

    // Pipe
    PipesModule,

    // 3rd party
    // ToastModule,
    NgxSkeletonLoaderModule,

    // modules
    // SharedCardModule,
    // SharedNavTabModule,
    // SharedTableModule,

    ...sharedComponents
  ]
})
export class SharedAppModule {
}
