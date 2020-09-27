import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../../partials/constants';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-admin-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class AdminCategoriesListComponent implements OnInit {
  data$: Observable<any[]>;
  selectedData: any[] = [];
  cols: any[];
  constantsTable = Constants.table;

  category: any;
  categories = [{
    name: 'None',
    slug: 'none',
    id: 0,
    label: 'None',
    value: 0
  }];

  // form
  submitted: boolean;
  form: FormGroup;
  name: AbstractControl;
  slug: AbstractControl;
  description: AbstractControl;
  validationMessages = {
    name: {
      required: 'Name is required.',
    },
    slug: {
      required: 'Slug is required.',
    }
  };

  constructor(private afs: AngularFirestore,
              private fb: FormBuilder,
              private modalService: NgbModal,
              private confirmationService: ConfirmationService) {
    this.form = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      slug: ['', Validators.compose([Validators.required])],
      parentId: [0],
      description: ['']
    });
    this.name = this.form.controls.name;
    this.slug = this.form.controls.slug;
    this.description = this.form.controls.description;
  }

  ngOnInit(): void {
    this.cols = [
      {field: 'name', header: 'Name'},
      {field: 'description', header: 'Description'},
      {field: 'slug', header: 'Slug'},
      {field: 'count', header: 'Count'},
    ];


    this.data$ = this.afs.collection('categories').valueChanges({idField: 'id'})
      .pipe(
        tap(res => {
          console.log(res);
          if (res.length) {
            res = res.filter((v: any) => v.parentId === 0).map(v => {
              return {
                ...v,
                label: v.name,
                value: v.id
              };
            });
            this.categories = [...this.categories, ...res];
          }
        }),
        // map(res => {
        //   const data = this.arrayToTree(res);
        //   console.log(data);
        //   return data;
        // })
      );
  }

  onOpenFormModal(content, category?: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    //   .result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });

    this.form.reset();
    if (category) {
      this.category = category;
      this.form.patchValue({...category});
    } else {
      this.category = null;
    }
    this.submitted = false;
  }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    const {name, slug, parentId, description} = this.form.value;
    const body = {
      name,
      slug,
      parentId: parentId ? parentId : 0,
      description,
      count: 0
    };
    if (this.category) {
      await this.afs.doc(`categories/${this.category.id}`).update(body);
    } else {
      await this.afs.collection('categories').add(body);
    }

    this.modalService.dismissAll();
    this.submitted = false;
  }

  onDelete(rowData: any) {
    console.log(rowData);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log('accept');
      },
      reject: () => {
        console.log('reject');
      }
    });
  }

  private arrayToTree(list) {
    var map = {}, node, roots = [], i;

    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // initialize the map
      list[i].children = []; // initialize the children
    }

    // console.log(list)

    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      console.log(node);
      if (node.parentId !== 0) {
        // if you have dangling branches check that map[node.parent] exists

        list[map[node.parentId]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }
}
