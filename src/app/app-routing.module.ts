import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component'
import { FavoriteMoviesComponent } from './components/favorite-movies/favorite-movies.component'


const routes: Routes = [
  { path: 'favorite', component: FavoriteMoviesComponent, pathMatch:'full'},
  { path: '', component: PopularMoviesComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
