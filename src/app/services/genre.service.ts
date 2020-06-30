import {Injectable} from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { GenresModel } from '../models/genres.model'
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class GenreService {
    list: GenresModel

    constructor(private http: HttpClient) {}

    downloadList(): Observable<GenresModel> {
        return this.http.get<GenresModel>('https://api.themoviedb.org/3/genre/movie/list?api_key=e4035ae71649bd95de62e663316862ab&language=ru-Ru').pipe(tap(list => this.list = list))
    }

    sortGenres(): void{
        this.list.genres.sort((a,b)=>{return a.id-b.id});
    }

    searchGenres(id: number): string {
        return this.list.genres.find(item => item.id === id).name;
    }
}