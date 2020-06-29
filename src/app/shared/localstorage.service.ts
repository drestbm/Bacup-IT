import {Injectable} from '@angular/core';
import { HttpClient, HttpParams }   from '@angular/common/http';
import { ListOfFilms } from '../shared/film'
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class LocalStorageService {


    constructor(private http: HttpClient) {}

    addFavoritefilm(id:number) {

    }

    delFavoritefilm(id:number) {
        
    }
}