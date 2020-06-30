import { Component, OnInit } from '@angular/core'
import {PageEvent} from '@angular/material/paginator'

import { MovieModel } from '../../models/movie.model'

import { PopularMoviesService } from '../../services/popular-movies.service'
import { GenreService } from '../../services/genre.service'
import { LocalStorageService } from '../../services/local-storage.service'
import { forkJoin } from 'rxjs'
import { animation } from '../../includes/animation.module'

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.sass'],
  animations: [
    animation  
  ]
})

export class PopularMoviesComponent implements OnInit {
  loading: boolean = true
  pageEvent: PageEvent
  name:string = ""
  state: string = "invisible"
  
  constructor(private popularMoviesService:PopularMoviesService, private genresService:GenreService, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.localStorageService.init()

    forkJoin(
      this.popularMoviesService.downloadList(),
      this.genresService.downloadList()
    ).subscribe(() => { 
      this.loading = false 
      this.state= "visible"
    })
  }

  getGenres(movie: MovieModel): string {
    let result = ""
    for (let genre_id of movie.genre_ids) {
      result += ", " + this.genresService.searchGenres(genre_id)
    }
    return result.slice(1)
  }

  turnPage(event?:PageEvent): PageEvent {
    if (this.name === "") {
      this.loading = true
      this.popularMoviesService.downloadList(event.pageIndex+1)
        .subscribe(() => {
          this.loading = false
        })}
    else {
      this.popularMoviesService.searchMovies(this.name, event.pageIndex+1)
        .subscribe(() => {
          this.loading = false
        })
    }
    return event
  }

  searchMovies(){
    if (this.name === "") {
      this.loading = true
      this.popularMoviesService.downloadList()
        .subscribe(() => {
          this.loading = false
        })}
    else {
      this.popularMoviesService.searchMovies(this.name)
        .subscribe(() => {
          this.loading = false
        })
    }
  }

  getListOfMovies(): MovieModel[] { return this.popularMoviesService.list.results }

  getPageSize() { return this.popularMoviesService.list.total_results }

  getMovieLength() { return this.popularMoviesService.list.results.length }

  addFavoriteMovie(movie: MovieModel) { this.localStorageService.add(movie) }

  delFavoriteMovie(movie: MovieModel) { this.localStorageService.del(movie) }

  errorHandler(event) {
    event.target.src = "assets/close.png";
  }
}
