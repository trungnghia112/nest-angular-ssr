import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { DOCUMENT } from '@angular/common';
import { QuillModules } from 'ngx-quill';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';

// import * as QuillNamespace from 'quill';
// let Quill: any = QuillNamespace;
// import ImageResize from 'quill-image-resize-module';
// Quill.register('modules/imageResize', ImageResize);
const FILE_DIR = 'sections';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  @ViewChild('quillFile') quillFileRef: ElementRef;
  quillFile: any;
  meQuillRef: any;

  id: string;
  title: string;
  content: string;
  editorModules: QuillModules;

  constructor(private route: ActivatedRoute,
              private afs: AngularFirestore,
              private storage: AngularFireStorage,
              @Inject(DOCUMENT) private document: Document) {
    this.loadStyle('//cdn.quilljs.com/1.3.6/quill.snow.css');

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
  }

  async getData() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      console.log(this.id);
    }
  }

  async onSubmit() {
    console.log(this.content);
    // await this.afs.collection('posts').add({
    //   title: this.title,
    //   content: this.content
    // });
  }

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];

    let themeLink = this.document.getElementById('client-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${styleName}`;

      head.appendChild(style);
    }
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


    // const imageData = {
    //   id: this.article != null && this.article !== undefined ? this.article.post_id : null,
    //   title: this.quillFile.name,
    //   file: this.quillFile
    // };
    // this.dataService.postImage(imageData).subscribe(
    //   (response: any) => {
    //     console.log(response);
    //     const filename = response.data.filename;
    //     let range: any;
    //     const img = '<img class="img-within" src="your_upload_directory_here/' + filename + '"></img>';
    //     range = this.meQuillRef.getSelection();
    //     this.meQuillRef.clipboard.dangerouslyPasteHTML(range.index, img);
    //   }
    // );
  }

  /* I am using id and title fields for my own needs, to store data in my database on backend, you can remove them if you want */
  /*postImage(imageData: { id: number, title: string, file: any }): Observable<any> {
    const url = this.baseUrl + 'images';
    const formData = new FormData();
    if (imageData != null && imageData.id != null) {
      formData.append('id', imageData.id + '');
    }

    if (imageData != null && imageData.title != null) {
      formData.append('title', imageData.title);
    } else {
      formData.append('title', 'dhm_' + Math.round(Math.random() * 100000000));
    }

    formData.append('fileupload', imageData.file);
    return this.http.post(url, formData).pipe(map(
      (results) => results));
  }*/
}
