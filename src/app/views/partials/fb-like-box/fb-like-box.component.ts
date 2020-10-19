import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { environment } from '@env/environment';

@Component({
  selector: 'app-partials-fb-like-box',
  templateUrl: './fb-like-box.component.html',
  styleUrls: ['./fb-like-box.component.scss']
})
export class PartialsFbLikeBoxComponent implements OnInit {
  fanpage: string = environment.facebook.fanpage;

  constructor(@Inject(PLATFORM_ID) private platformId: any,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const fblike = this.document.getElementById('fblike-box');
      // const fbPage = fblike.querySelector('fb-page');
      // console.log(fblike);
      // fbPage.setAttribute('data-href', environment.facebook.fanpage);

      window.onscroll = () => {
        const rect: any = fblike.getBoundingClientRect();

        // console.log(rect);
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
