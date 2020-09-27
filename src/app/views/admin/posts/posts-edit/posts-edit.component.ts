import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QuillModules } from 'ngx-quill';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, take, tap } from 'rxjs/operators';

// import * as QuillNamespace from 'quill';
// let Quill: any = QuillNamespace;
// import ImageResize from 'quill-image-resize-module';
// Quill.register('modules/imageResize', ImageResize);
const FILE_DIR = 'sections';

@Component({
  selector: 'app-admin-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.scss']
})
export class AdminPostsEditComponent implements OnInit {

  @ViewChild('quillFile') quillFileRef: ElementRef;
  quillFile: any;
  meQuillRef: any;

  id: string;
  title: string;
  content: string;
  editorModules: QuillModules;
  selectedCategories: any[] = [];
  categories: any[];


  constructor(private route: ActivatedRoute,
              private afs: AngularFirestore,
              private storage: AngularFireStorage) {
    this.editorModules = {
      toolbar: {
        container: [
          [{font: []}],
          [{size: ['small', false, 'large', 'huge']}],
          ['bold', 'italic', 'underline', 'strike'],
          [{header: 1}, {header: 2}],
          [{color: []}, {background: []}],
          [{list: 'ordered'}, {list: 'bullet'}],
          [{align: []}],
          ['link', 'image']
        ],
        handlers: {
          image: (image) => {
            this.customImageUpload(image);
          }
        }
      },
      // imageResize: true,
    };
  }

  ngOnInit(): void {
    this.getData();
    this.getCategories();
  }

  async getCategories() {
    this.categories = await this.afs.collection('categories').valueChanges({idField: 'id'})
      .pipe(take(1))
      .toPromise();
  }

  async getData() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      console.log(this.id);
    }
  }

  async onSubmit() {
    console.log(this.selectedCategories);
    const categoriesUsed = {};
    this.selectedCategories.map(
      v => {
        categoriesUsed[v.slug] = true;
      }
    );

    const body = {
      title: this.title,
      content: this.content,
      categoriesUsed
    };

    await this.afs.collection('posts').add(body);
  }

  getMeEditorInstance(editorInstance: any) {
    this.meQuillRef = editorInstance;
  }

  onEditorContentChanged(event: any) {
    // console.log(event);
    const {oldDelta, source} = event;
    if (source === 'user') {
      let currentContents = this.meQuillRef.getContents();
      let diff: any = currentContents.diff(oldDelta);
      try {
        diff.ops.map((v: any) => {
          if (v.insert && v.insert.image) {
            const imageStr = v.insert.image.split(`${FILE_DIR}%2F`);
            // console.log(imageStr);
            if (imageStr[1]) {
              const filePathStr = imageStr[1].split(`?alt=`);
              // console.log(filePathStr[0]);
              const name = `${filePathStr[0]}`;
              const path = `${FILE_DIR}/${name}`;

              // Reference to storage bucket
              const ref = this.storage.ref(path);
              ref.delete();
            }
          }
        });
      } catch (_error) {
      }
    }
  }

  customImageUpload(image: any) {
    console.log(image);
    /* Here we trigger a click action on the file input field, this will open a file chooser on a client computer */
    this.quillFileRef.nativeElement.click();
  }

  async quillFileSelected(ev: any) {
    /* After the file is selected from the file chooser, we handle the upload process */
    this.quillFile = ev.target.files[0];
    console.log(ev.target.files[0]);

    const name = `${Date.now()}_${ev.target.files[0].name}`;
    const path = `${FILE_DIR}/${name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);
    await this.storage.upload(path, ev.target.files[0]).snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize(async () => {
        const downloadURL = await ref.getDownloadURL().toPromise();
        // console.log(downloadURL);
        let range: any;
        const img = `<img class="img-within" src="${downloadURL}"/>`;
        range = this.meQuillRef.getSelection();
        this.meQuillRef.clipboard.dangerouslyPasteHTML(range.index, img);
      }),
    ).toPromise();
  }
}
