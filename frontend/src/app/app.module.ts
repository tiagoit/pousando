import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { Layout01Component } from './layout01/layout01.component';
import { HeaderComponent } from './layout01/header/header.component';
import { FooterComponent } from './layout01/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    Layout01Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
