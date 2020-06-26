import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfFilmsComponent } from './list-of-films/list-of-films.component';
import { FavoriteFilmsComponent } from './favorite-films/favorite-films.component';
import { HttpClientModule }   from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListOfFilmsComponent,
    FavoriteFilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/Bacup-IT/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
