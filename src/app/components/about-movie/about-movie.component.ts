import { Component, OnInit } from '@angular/core'
import { ActivatedRoute} from '@angular/router'

import { MovieModel } from '../../models/movie.model'

import { LocalStorageService } from '../../services/local-storage.service'
import { MovieService } from '../../services/movie.service'
import { Subscription, Observable, forkJoin } from 'rxjs'
import { animation } from '../../includes/animation.module'


@Component({
  selector: 'app-about-movie',
  templateUrl: './about-movie.component.html',
  styleUrls: ['./about-movie.component.sass'],
  animations: [
    animation  
  ]
})

export class AboutMovieComponent implements OnInit {
  loading: boolean=true
  id: number
  state: string = "invisible"
  private subscription: Subscription
  
  
  constructor(
    private localStorageService: LocalStorageService,
    private movieService: MovieService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.localStorageService.init()
    this.id = this.activateRoute.snapshot.params['id'];
    this.subscription = this.activateRoute.params
      .subscribe(params=>{
        this.state = "invisible"
        window.scrollTo(0,0)
        this.id=params['id']
        forkJoin(
          this.movieService.downloadInfo(this.id),
          this.movieService.downloadRecommend(this.id)
        ).subscribe(()=>{
          this.loading=false
          this.state= "visible" 
        })
      })
  }

    getMovie() {
    return this.movieService.movie
  }

  getRecommend() {
    return this.movieService.recommend.results.slice(0,6)
  }

  getGenres(): string {
    let result = ""
    for (let genre of this.movieService.movie.genres) {
        result += ", " + genre.name
    }
    return result.slice(1)
  }

  getCompanies(): string{
    let result = ""
    for (let comp of this.movieService.movie.production_companies) {
        result += ", " + comp.name
    }
    return result.slice(1)
  }

  getCountres(): string{
    let result = ""
    for (let country of this.movieService.movie.production_countries) {
        result += ", " + country.name
    }
    return result.slice(1)
  }

  addFavoriteMovie(movie: MovieModel = this.movieService.movie) { 
    console.log(movie)
    this.localStorageService.add(movie) }

  delFavoriteMovie(movie: MovieModel = this.movieService.movie) { this.localStorageService.del(movie) }

  errorHandler(event) { event.target.src = "assets/close.png" }
}