import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from '@pages/pages.component';
import { ErrorPageComponent } from '@pages/error-page/error-page.component';
import { CoreAppModule } from '@core/core.module';
import { SharedAppModule } from '@shared/shared.module';
import { LayoutsModule } from './views/layouts/layouts.module';
import { PartialsModule } from '@partials/partials.module';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    CoreAppModule,
    SharedAppModule,
    LayoutsModule,
    PartialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
