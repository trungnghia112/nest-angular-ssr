import { Directive, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropZone]'
})
export class DropZoneDirective {
  @Output() dropped: EventEmitter<FileList> = new EventEmitter<FileList>();
  @Output() hovered = new EventEmitter<boolean>();

  constructor() {}

  @HostListener('drop', ['$event'])
  onDrop($event) {
    $event.preventDefault();
    this.dropped.emit($event.dataTransfer.files);
    this.hovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    $event.preventDefault();
    this.hovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    $event.preventDefault();
    this.hovered.emit(false);
  }
}
