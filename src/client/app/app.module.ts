import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyBywWbN07uMZmntKrQwvtKFEpMMmdr6jqg",
  authDomain: "blindtest-997e7.firebaseapp.com",
  databaseURL: "https://blindtest-997e7.firebaseio.com",
  storageBucket: "blindtest-997e7.appspot.com"
};

@NgModule({
  imports: [BrowserModule,  AngularFireModule.initializeApp(firebaseConfig), HttpModule, RouterModule.forRoot(routes), AboutModule, HomeModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
