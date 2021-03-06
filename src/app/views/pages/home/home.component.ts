import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ApiService } from '@core/services/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { SettingsService } from '@core/services/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blog$: any;

  categories$: Observable<any>;

  constructor(@Inject(PLATFORM_ID) private platformId: any,
              private http: ApiService,
              private settingsService: SettingsService) {
    this.categories$ = this.settingsService.categories$;
  }

  ngOnInit(): void {
    this.initTextAnimSlider();
    this.getBlogPosts();
  }

  getBlogPosts() {
    this.blog$ = this.http.get('/posts?per_page=5&_fields=date_gmt,title,slug,_links,_embedded&_embed=wp:featuredmedia');
  }

  initTextAnimSlider() {
    if (isPlatformBrowser(this.platformId)) {
      const textAnimHolder: any = document.querySelector('[data-words]');
      if (textAnimHolder) {
        const textAnimItem = document.querySelectorAll('.text-anim-item');
        const textAnimItems = document.querySelector('.text-anim-items');
        const animLine: any = document.querySelector('.anim-line');
        const animIn = 'anim-in';
        const animOut = 'anim-out';
        const lineActiveClass = 'line-active';
        let animNextItem = null;
        let animPrevItem = null;
        let animFirstLoad = false;
        const animDuration = textAnimHolder.getAttribute('data-delay');
        let animCounter = 0;
        let setTimeAnim;
        let setTimeAnimResize;
        animFunc();
        getHolderWidth();

        function animFunc() {
          clearTimeout(setTimeAnim);
          setTimeAnim = setTimeout(function () {
            animFirstLoad = true;
            if (animPrevItem !== null) {
              animPrevItem.classList.add(animOut);
            }
            animNextItem = textAnimItems.children[animCounter];

            if (animNextItem) {
              animNextItem.classList.remove(animOut);
              animNextItem.classList.add(animIn);
              animLine.style.width = animNextItem.clientWidth + 'px';
              animLine.classList.add(lineActiveClass);
              animPrevItem = animNextItem;
              if (animCounter === textAnimItem.length - 1) {
                animCounter = 0;
              } else {
                animCounter++;
              }
              animFunc();
            }

          }, animFirstLoad ? animDuration : 100);
        }

        function getHolderWidth() {
          var itemsWidth = [];
          for (var i = 0; i < textAnimItem.length; i++) {
            itemsWidth.push(textAnimItem[i].clientWidth);
            // console.log(textAnimItem[i].clientWidth);
          }
          textAnimHolder.style.width = 'auto';
        }

        function resizeHandler() {
          clearTimeout(setTimeAnim);
          clearTimeout(setTimeAnimResize);
          getHolderWidth();
          setTimeAnimResize = setTimeout(function () {
            animFunc();
          }, 50);
        }


        window.addEventListener('resize', resizeHandler);
        window.addEventListener('orientationchange', resizeHandler);
      }
    }
  }
}
