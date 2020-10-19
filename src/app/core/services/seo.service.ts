import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(@Inject(DOCUMENT) private document: Document,
              private title: Title,
              private meta: Meta,
              private router: Router) {
  }

  generateTags({title = '', description = '', image = ''}) {

    this.title.setTitle(title);
    this.meta.addTags([
      // Open Graph
      {name: 'og:url', content: `${environment.domain.app}/${this.router.url}`},
      {name: 'og:title', content: title},
      {name: 'og:description', content: description},
      {name: 'og:image', content: image},
      // Twitter Card
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: '@trungnghia112'},
    ]);

    // this.insertLdJson();
  }

  /*insertLdJson() {
    let ldJsonLink = this.document.getElementById('ldJsonLink');
    if (ldJsonLink) {
      ldJsonLink.innerHTML += this.ldJsonContent();
    } else {
      const js = this.document.createElement('script');
      js.type = 'application/ld+json';
      js.innerHTML += this.ldJsonContent();
      this.document.body.appendChild(js);
    }
  }

  ldJsonContent(data?: any) {
    return {
      '@context': 'https://schema.org',
      '@type': data.type || '',
      'headline': data.headline || '',
      'image': data.image || '',
      'author': {
        '@type': data.author.type || '',
        'name': data.author.name || ''
      },
      'publisher': {
        '@type': data.publisher.type || '',
        'name': data.publisher.name || '',
        'logo': {
          '@type': 'ImageObject',
          'url': data.publisher.logo.url || ''
        }
      },
      'datePublished': data.datePublished || ''
    };
  }*/
}
