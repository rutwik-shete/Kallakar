import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';

import {MDBBootstrapModule} from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KnowmoreComponent } from './knowmore/knowmore.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from 'src/environments/environment';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KnowmoreComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFireStorageModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'Home' , component: HomeComponent},
      {path: 'KnowMore' , component: KnowmoreComponent},
      {path: '' , redirectTo: 'Home' , pathMatch: 'full'},
      {path: '**', redirectTo: 'Home' , pathMatch: 'full'}
    ])
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
   
}
