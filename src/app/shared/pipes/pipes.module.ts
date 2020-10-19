import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeysPipe } from './keys.pipe';
// import { GroupByMapPipe } from './group-by-map.pipe';
// import { KeyToValuePipe } from './keyToValue.pipe';
// import { BytesPipe } from './bytes.pipe';
import { SafeHtmlPipe } from './safeHtml.pipe';
// import { ShortNumberPipe } from './short-number.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    KeysPipe,
    // GroupByMapPipe,
    // KeyToValuePipe,
    // BytesPipe,
    SafeHtmlPipe,
    // ShortNumberPipe
  ],
  exports: [
    KeysPipe,
    // GroupByMapPipe,
    // KeyToValuePipe,
    // BytesPipe,
    SafeHtmlPipe,
    // ShortNumberPipe
  ],
  providers: []
})

export class PipesModule {
}
