import { Component, OnInit } from '@angular/core'
import {PageEvent} from '@angular/material/paginator'

import { MovieModel } from '../../models/movie.model'

import { LocalStorageService } from '../../services/local-storage.service'
import { GenreService } from '../../services/genre.service'
import { animation } from '../../includes/animation.module'



@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.sass'],
  animations: [
    animation  
  ]
  
})
export class FavoriteMoviesComponent implements OnInit {
  loading: boolean = true
  pageEvent: PageEvent
  state: string = "invisible"
  
  constructor(private localStorageService: LocalStorageService, private genresService:GenreService) {}

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.genresService.downloadList()
          .subscribe(() => {
            this.localStorageService.init()
            this.loading = false
            this.state= "visible"
        })
    
  }

  getFavoriteMovies(): MovieModel[] { 
    return this.localStorageService.list.results
  }

  deleteFavoriteMovie(movie: MovieModel) { this.localStorageService.del(movie) }
}
