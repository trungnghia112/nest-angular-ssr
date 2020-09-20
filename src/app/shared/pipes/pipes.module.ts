import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { KeysPipe } from './keys.pipe';
// import { GroupByMapPipe } from './group-by-map.pipe';
// import { KeyToValuePipe } from './keyToValue.pipe';
// import { BytesPipe } from './bytes.pipe';
// import { ShortNumberPipe } from './short-number.pipe';
import { SafeHtmlPipe } from './safeHtml.pipe';

const pipesArr = [
  // KeysPipe,
  // GroupByMapPipe,
  // KeyToValuePipe,
  // BytesPipe,
  // ShortNumberPipe,
  SafeHtmlPipe
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...pipesArr
  ],
  exports: [
    ...pipesArr
  ],
  providers: []
})

export class PipesModule {
}
