import {Injectable} from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { GenresModel } from '../models/genres.model'
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';

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

    getGenres(ids: number[]): Observable<string> {
        return new Observable((sub)=>{
            let genres = ""
            ids.map((id)=>{
                new Observable((sub_in)=>
                {
                    sub_in.next(this.list.genres.find(item => item.id === id).name)
                }).subscribe((value)=>{
                    genres += ', ' + value
                })
            })
            sub.next(genres.slice(1))
        })
    }
}