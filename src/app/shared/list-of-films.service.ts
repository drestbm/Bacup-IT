import {Injectable} from '@angular/core';
import { HttpClient, HttpParams }   from '@angular/common/http';
import { ListOfFilms } from '../shared/film'
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ListOfFilmsService {
    public list: ListOfFilms

    constructor(private http: HttpClient) {}

    downloadList(): Observable<ListOfFilms> {
        return this.http.get<ListOfFilms>('https://api.themoviedb.org/3/movie/popular?api_key=e4035ae71649bd95de62e663316862ab&language=ru-RU&page=1').pipe(tap(list => this.list = list))
    }
}