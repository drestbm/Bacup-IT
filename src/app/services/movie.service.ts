import { Injectable } from '@angular/core';
import { HttpClient, HttpParams }   from '@angular/common/http';
import { DetailMovieModel } from '../models/detail-movie.model'
import { map } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';
import { MoviesModel } from '../models/moives.model';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class MovieService {
    movie: DetailMovieModel
    recommend: MoviesModel


    constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

    downloadInfo(id: number): Observable<DetailMovieModel> {
        return this.http.get<DetailMovieModel>('https://api.themoviedb.org/3/movie/'+ id +'?api_key=e4035ae71649bd95de62e663316862ab&language=ru-RU')
            .pipe(map(data =>{
                this.movie = data
                this.movie.genre_ids = this.movie.genres.map((item)=>item.id)
                if (this.localStorageService.list.results.find(item => item.id === this.movie.id) === undefined)
                    this.movie.isFavorite = false
                else
                    this.movie.isFavorite = true
                return this.movie
            }))
    }

    downloadRecommend(id: number) {
        return this.http.get<MoviesModel>('https://api.themoviedb.org/3/movie/'+ id +'/recommendations?api_key=e4035ae71649bd95de62e663316862ab&language=ru-RU')
            .pipe(map(data =>{
                this.recommend = data
                this.recommend.results.map((movie)=>{
                    if (this.localStorageService.list.results.find(item => item.id === movie.id) === undefined)
                        movie.isFavorite = false
                    else
                        movie.isFavorite = true
                })
                return this.recommend
        }))
    }
}