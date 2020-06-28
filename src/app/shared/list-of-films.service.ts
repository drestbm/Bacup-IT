import {Injectable} from '@angular/core';
import { HttpClient, HttpParams }   from '@angular/common/http';
import { ListOfFilms } from '../shared/film'
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ListOfFilmsService {
    public loading: boolean = true
    public list: ListOfFilms

    constructor(private http: HttpClient) {}

    downloadList(): Observable<ListOfFilms> {
        return this.http.get<ListOfFilms>('https://api.themoviedb.org/3/movie/popular?api_key=e4035ae71649bd95de62e663316862ab&language=ru-RU&page=1').pipe(tap(list => this.list = list))
    }

    searchFilm(name: string): Observable<ListOfFilms> {
        console.log(this.http.get<ListOfFilms>('https://api.themoviedb.org/3/search/movie?api_key=e4035ae71649bd95de62e663316862ab&language=ru-RU&query='+ 'name').pipe(tap(list => this.list = list)))
        return this.http.get<ListOfFilms>('https://api.themoviedb.org/3/search/movie?api_key=e4035ae71649bd95de62e663316862ab&language=ru-RU&query='+ 'name').pipe(tap(list => this.list = list))
    }
}