import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfFilmsComponent } from './list-of-films/list-of-films.component';
import { FavoriteFilmsComponent } from './favorite-films/favorite-films.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfFilmsComponent,
    FavoriteFilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
