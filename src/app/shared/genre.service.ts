import {Injectable} from '@angular/core';
import { HttpClient, HttpParams }   from '@angular/common/http';
import { Genres } from '../shared/genre'
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class GenreService {
    public list: Genres

    constructor(private http: HttpClient) {}

    downloadList(): Observable<Genres> {
        return this.http.get<Genres>('https://api.themoviedb.org/3/genre/movie/list?api_key=e4035ae71649bd95de62e663316862ab&language=ru-Ru').pipe(tap(list => this.list = list))
    }
}