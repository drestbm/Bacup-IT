import { Component, OnInit } from '@angular/core'
import {PageEvent} from '@angular/material/paginator'
import { forkJoin } from 'rxjs'

import { MovieModel } from '../../models/movie.model'

import { PopularMoviesService } from '../../services/popular-movies.service'
import { GenreService } from '../../services/genre.service'
import { LocalStorageService } from '../../services/local-storage.service'

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
    window.scrollTo(0,0)
    forkJoin(
      this.popularMoviesService.downloadList(),
      this.genresService.downloadList()
    ).subscribe(() => { 
      this.loading = false 
      this.state= "visible"
    })
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

}
