import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
