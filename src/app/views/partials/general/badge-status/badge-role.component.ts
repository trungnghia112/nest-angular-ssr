import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-partials-badge-status',
  template: `
    <span *ngIf="status === 'active'" class="text-success">
      <i class="badge badge-dot badge-success"></i> {{ status }}
    </span>
    <span *ngIf="status === 'inactive'" class="text-warning">
      <i class="badge badge-dot badge-warning"></i> {{ status }}
    </span>
  `
})
export class PartialsBadgeStatusComponent implements OnInit {
  @Input() status: string;

  constructor() {
  }

  ngOnInit() {
  }
}
