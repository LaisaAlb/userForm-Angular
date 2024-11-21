import { IMusic } from "./music.interface";

export interface IUser{
    name: string;
    username: string;
    email: string;
    password: string;
    birthDate: string;
    state: number;
    musics: IMusic[]; 
}