import { UsersPlaceholderListResponse } from './../types/usersPlaceholder-list-response';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UsersPlaceholderService{
    constructor( 
       private _httpClient: HttpClient
    ){}

    getUsersPlaceholder(): Observable<UsersPlaceholderListResponse>{
        return this._httpClient.get<UsersPlaceholderListResponse>('https://jsonplaceholder.typicode.com/users')
    }
}