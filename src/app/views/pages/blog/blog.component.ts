import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.onscroll = () => {
        var rect = this.document.getElementById('fblike-box').getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          this.loadAPI();
          window.onscroll = null;
        }
      };
    }
  }

  loadAPI() {
    if (isPlatformBrowser(this.platformId)) {
      const js = this.document.createElement('script');
      js.src = '//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v8.0&appId=1784284158379246&autoLogAppEvents=1';
      js.setAttribute('nonce', 'YXaiEd9E');
      js.setAttribute('crossorigin', 'anonymous');
      this.document.body.appendChild(js);
    }
  }
}
