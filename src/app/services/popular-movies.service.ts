import { Injectable } from '@angular/core';
import { HttpClient, HttpParams }   from '@angular/common/http';
import { MoviesModel } from '../models/moives.model'
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

@Injectable({providedIn: 'root'})
export class PopularMoviesService {
    list: MoviesModel

    constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

    downloadList(page:number = 1): Observable<MoviesModel> {
        return this.http.get<MoviesModel>('https://api.themoviedb.org/3/movie/popular?api_key=e4035ae71649bd95de62e663316862ab&language=ru-RU&page=' + page)
        .pipe(map(data =>{
            this.list = data
            this.list.results.map((movie)=>{
                if (this.localStorageService.list.results.find(item => item.id === movie.id) === undefined)
                    movie.isFavorite = false
                else
                    movie.isFavorite = true
            })
            return this.list
        }))
    }

    searchMovies(name: string, page:number = 1): Observable<MoviesModel> {
        return this.http.get<MoviesModel>('https://api.themoviedb.org/3/search/movie?api_key=e4035ae71649bd95de62e663316862ab&language=ru-RU&query='+name+'&page='+page)
        .pipe(map(data =>{
            this.list = data
            this.list.results.map((movie)=>{
                if (this.localStorageService.list.results.find(item => item.id === movie.id) === undefined)
                    movie.isFavorite = false
                else
                    movie.isFavorite = true
            })
            return this.list
        }))
    }
}