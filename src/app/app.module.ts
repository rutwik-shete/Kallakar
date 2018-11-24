import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';

import {MDBBootstrapModule} from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KnowmoreComponent } from './knowmore/knowmore.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KnowmoreComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
