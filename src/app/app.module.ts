import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule }   from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './includes/material.module'
import {APP_BASE_HREF} from '@angular/common'

import { AppComponent } from './app.component'

import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component'
import { FavoriteMoviesComponent } from './components/favorite-movies/favorite-movies.component';
import { AboutMovieComponent } from './components/about-movie/about-movie.component'

@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
    FavoriteMoviesComponent,
    AboutMovieComponent,
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
