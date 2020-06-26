import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfFilmsComponent } from './list-of-films/list-of-films.component'
import { FavoriteFilmsComponent } from './favorite-films/favorite-films.component'


const routes: Routes = [
  { path: '', component: ListOfFilmsComponent},
  { path: 'favorite', component: FavoriteFilmsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
