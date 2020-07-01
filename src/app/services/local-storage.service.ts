import {Injectable} from '@angular/core';
import { MoviesModel } from '../models/moives.model'
import { MovieModel } from '../models/movie.model'

@Injectable({providedIn: 'root'})
export class LocalStorageService {
    list: MoviesModel

    constructor() {}

    init() {
        this.list = JSON.parse(localStorage.getItem('favoriteMovies')) || {
            page: 1,
            total_results: 0,
            total_pages: 1,
            results: []
        }
    }

    add(movie:MovieModel): void {
        movie.isFavorite = true
        console.log(movie)
        this.list.results.push(movie)
        this.list.total_results++
        this.list.total_pages = Math.ceil(this.list.total_results / 20)
        localStorage.setItem('favoriteMovies', JSON.stringify(this.list))
        
    }

    del(movie:MovieModel): void {
        const index = this.list.results.findIndex(item => item.id === movie.id)
        if (index !== -1) {
            movie.isFavorite = false
            this.list.results.splice(index,1)
            this.list.total_results--
            this.list.total_pages = Math.ceil(this.list.total_results / 20)
            localStorage.setItem('favoriteMovies', JSON.stringify(this.list))
        }
    }
}