import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListOfFilmsService } from '../shared/list-of-films.service'
import { GenreService } from '../shared/genre.service'
import { Film } from '../shared/film'

@Component({
  selector: 'app-list-of-films',
  templateUrl: './list-of-films.component.html',
  styleUrls: ['./list-of-films.component.sass']
})

export class ListOfFilmsComponent implements OnInit {
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
