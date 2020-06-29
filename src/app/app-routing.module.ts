import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfFilmsComponent } from './list-of-films/list-of-films.component'
import { FavoriteFilmsComponent } from './favorite-films/favorite-films.component'
import { AboutFilmComponent } from './about-film/about-film.component'


const routes: Routes = [
  { path: 'favorite', component: FavoriteFilmsComponent, pathMatch:'full'},
  { path: 'about', component: AboutFilmComponent},
  { path: '', component: ListOfFilmsComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
