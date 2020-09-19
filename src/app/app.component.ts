import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu: { name: string, slug: string }[] = [
    {
      name: 'Vlog',
      slug: 'vlog'
    },
    {
      name: 'Blog',
      slug: 'blog'
    },
    {
      name: 'Dev',
      slug: 'dev'
    },
    {
      name: 'Nghĩa là ai?',
      slug: 'about'
    },
    {
      name: 'Liên hệ',
      slug: 'contact'
    }
  ];
  title = 'angular-seed';
}
