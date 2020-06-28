import { Component, OnInit } from '@angular/core';
import { ListOfFilmsService } from '../shared/list-of-films.service'
import { GenreService } from '../shared/genre.service'
import { Film } from '../shared/film'

@Component({
  selector: 'app-favorite-films',
  templateUrl: './favorite-films.component.html',
  styleUrls: ['./favorite-films.component.sass']
  
})
export class FavoriteFilmsComponent implements OnInit {
  private loading: boolean = true
  public name: string = ""
  
  constructor(public listOfFilmsService:ListOfFilmsService, public genresService:GenreService) {}

  ngOnInit(): void {
    this.listOfFilmsService.downloadList()
      .subscribe(() => {
        this.loading = false
      })
    this.genresService.downloadList()
      .subscribe(() => {
        this.loading = false
    })
  }

  getGenres(film: Film): string {
    let result = ""
    for (let genre_id of film.genre_ids) {
      result += ", " + this.genresService.searchGenres(genre_id)
    }
    return result.slice(1)
  }

}
