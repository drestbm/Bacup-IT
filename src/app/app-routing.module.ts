import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component'
import { FavoriteMoviesComponent } from './components/favorite-movies/favorite-movies.component'
import { AboutMovieComponent } from './components/about-movie/about-movie.component';


const routes: Routes = [
  { path: '', component: PopularMoviesComponent, pathMatch:'full'},
  { path: 'favorite', component: FavoriteMoviesComponent, pathMatch:'full'},
  { path: 'movie/:id', component: AboutMovieComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
