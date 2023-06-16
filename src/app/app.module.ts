import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArcgisTestComponent } from './arcgis-test/arcgis-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ArcgisTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
