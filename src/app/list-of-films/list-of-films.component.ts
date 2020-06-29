import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListOfFilmsService } from '../shared/list-of-films.service'
import { GenreService } from '../shared/genre.service'
import { Film } from '../shared/film'
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-list-of-films',
  templateUrl: './list-of-films.component.html',
  styleUrls: ['./list-of-films.component.sass']
})

export class ListOfFilmsComponent implements OnInit {
  loading: boolean = true;
  pageEvent: PageEvent;
  name:string = ""
  
  constructor(public listOfFilmsService:ListOfFilmsService, public genresService:GenreService) {}

  ngOnInit(): void {
    this.listOfFilmsService.downloadList()
      .subscribe(() => {
        this.genresService.downloadList()
          .subscribe(() => {
            this.loading = false
        })
      })
  }

  getGenres(film: Film): string {
    let result = ""
    for (let genre_id of film.genre_ids) {
      result += ", " + this.genresService.searchGenres(genre_id)
    }
    return result.slice(1)
  }

  turnPage(event?:PageEvent) {
    if (this.name === "") {
      this.loading = true
      this.listOfFilmsService.downloadList(event.pageIndex+1)
        .subscribe(() => {
          this.loading = false
        })}
    else {
      this.listOfFilmsService.searchFilm(this.name, event.pageIndex+1)
        .subscribe(() => {
          this.loading = false
        })
    }
    return event
  }

  searchFilm(){
    if (this.name === "") {
      this.loading = true
      this.listOfFilmsService.downloadList()
        .subscribe(() => {
          this.loading = false
        })}
    else {
      this.listOfFilmsService.searchFilm(this.name)
        .subscribe(() => {
          this.loading = false
        })
    }
  }
}
