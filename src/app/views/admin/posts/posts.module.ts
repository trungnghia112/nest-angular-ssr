import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminPostsRoutingModule } from './posts-routing.module';
import { AdminPostsEditComponent } from './posts-edit/posts-edit.component';
import { AdminPostsListComponent } from './posts-list/posts-list.component';
import { AdminCategoriesListComponent } from './categories-list/categories-list.component';
import { AdminTagsListComponent } from './tags-list/tags-list.component';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { DirectivesModule } from '@shared/directives/directives.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AdminPostsListComponent,
    AdminPostsEditComponent,
    AdminCategoriesListComponent,
    AdminTagsListComponent
  ],
  imports: [
    CommonModule,
    AdminPostsRoutingModule,
    TableModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    DropdownModule,
    ConfirmDialogModule,
    DirectivesModule,
    NgbModalModule
  ],
  providers: [
    ConfirmationService
  ]
})
export class AdminPostsModule {
}
