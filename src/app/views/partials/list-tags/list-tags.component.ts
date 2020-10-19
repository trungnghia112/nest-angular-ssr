import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-partials-list-tags',
  templateUrl: './list-tags.component.html',
  styleUrls: ['./list-tags.component.scss']
})
export class PartialsListTagsComponent implements OnInit {
  @Input() data: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
