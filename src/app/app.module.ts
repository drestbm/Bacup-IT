import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';


import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfFilmsComponent } from './list-of-films/list-of-films.component';
import { FavoriteFilmsComponent } from './favorite-films/favorite-films.component';
import { HttpClientModule }   from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material-module';
import { AboutFilmComponent } from './about-film/about-film.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfFilmsComponent,
    FavoriteFilmsComponent,
    AboutFilmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/Bacup-IT/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
