import { Component, ContentChild, ElementRef, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { BlockableUI } from '@shared/components/common/blockableui';
import { NavTab } from '@shared/components/nav-tab/nav-tab';

@Component({
  selector: 'app-card-header',
  template: `
    <h3 *ngIf="header" class="card-header-title">
      {{ header }}
      <small *ngIf="subHeader">{{ subHeader }}</small>
    </h3>
    <ng-container *ngIf="tabs">
      <app-shared-nav-tab [tabs]="tabs" [setTabActive]="setTabActive" (currentTab)="onCurrentTab($event)"></app-shared-nav-tab>
    </ng-container>
    <div class="card-header-toolbar">
      <ng-content></ng-content>
    </div>
  `
})
export class SharedCardHeaderComponent {
  @Input() header: string;
  @Input() subHeader: string;
  @Input() tabs: any;
  @Input() setTabActive: string;
  @HostBinding('class') classes = 'card-header';
  @Output() currentTab: EventEmitter<NavTab> = new EventEmitter<NavTab>();

  onCurrentTab(tab: NavTab) {
    this.currentTab.emit(tab);
  }
}

@Component({
  selector: 'app-card-footer',
  template: '<ng-content></ng-content>'
})
export class SharedCardFooterComponent {
  @HostBinding('class') classes = 'card-footer';
}

@Component({
  selector: 'app-card',
  template: `
    <ng-content *ngIf="headerFacet" select="app-card-header"></ng-content>
    <div class="card-body">
      <ng-content></ng-content>
    </div>
    <ng-content *ngIf="footerFacet" select="app-card-footer"></ng-content>
  `
})
export class SharedCardComponent implements BlockableUI {
  @HostBinding('class') classes = 'card';

  @Input() style: any;

  @Input() styleClass: string;

  @ContentChild(SharedCardHeaderComponent) headerFacet;

  @ContentChild(SharedCardFooterComponent) footerFacet;

  constructor(private el: ElementRef) {
  }

  getBlockableElement(): HTMLElement {
    return this.el.nativeElement.children[0];
  }
}
