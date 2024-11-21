import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "../interfaces/user/user.interface";
import { UserListResponse } from "../types/users-list-response";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private readonly userList: UserListResponse = [
        {
            name: 'João Silva',
            username: 'joaosilva1',
            email: 'joaosilva@example.com',
            password: 'senha1',
            birthDate: '01/12/1990',
            state: 13,
            musics: [
                { title: 'Bichinho', band: 'Duda Beat', genre: 8, isFavorite: false },
                { title: 'Faz Parte', band: 'Jorge & Mateus', genre: 11, isFavorite: false },
                { title: 'Amei Te Ver', band: 'Tiago Iorc', genre: 9, isFavorite: true },
            ]
        },
        {
            name: 'Maria Oliveira',
            username: 'mariaoliveira2',
            email: 'maria.oliveira@example.com',
            password: 'senha2@44',
            birthDate: '02/02/1995',
            state: 50,
            musics: [
                { title: 'Ai, Ai, Ai!', band: 'Vanessa da Mata', genre: 1, isFavorite: false },
                { title: 'Caiu a Ficha', band: 'Luan Santana', genre: 7, isFavorite: true },
                { title: 'O Sol', band: 'Jota Quest', genre: 12, isFavorite: false },
            ]
        },
        {
            name: 'Carlos Pereira',
            username: 'carlospereira3',
            email: 'carlos.pereira@example.com',
            password: 'senha3@123@122',
            birthDate: '03/03/2000',
            state: 42,
            musics: [
                { title: 'Trem-Bala', band: 'Ana Vilela', genre: 2, isFavorite: true },
                { title: 'De Janeiro a Janeiro', band: 'Roberta Campos e Nando Reis', genre: 2, isFavorite: false },
                { title: 'Viver', band: 'Seu Jorge', genre: 2, isFavorite: false },
            ]
        }
    ]

    getUsers(): Observable<UserListResponse> {
        return new Observable(observer => {
            setTimeout(() => {
                observer.next(this.userList);
                observer.complete();
            }, 2000);
        });
    }
}
