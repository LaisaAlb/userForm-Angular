import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GenreListResponse } from "../types/genres-list-response";

@Injectable({
    providedIn: 'root',
})

export  class GenreService {
    private readonly generesList: GenreListResponse = [
       { id: 1, description: 'Rook' },
       { id: 2, description: 'Pop' },
       { id: 3, description: 'Jazz' },
       { id: 4, description: 'Blue' },
       { id: 5, description: 'Country' },
       { id: 6, description: 'HipHop' },
       { id: 7, description: 'R&B' },
       { id: 8, description: 'Eletronic' },
       { id: 9, description: 'Classical' },
       { id: 10, description: 'Reggae' },
       { id: 11, description: 'Funk' },
       { id: 12, description: 'Soul' },
       { id: 13, description: 'Metal' },
       { id: 14, description: 'Indie' },
       { id: 15, description: 'Punk' },
       { id: 16, description: 'Alternative' },
       { id: 17, description: 'Gospel' },
       { id: 18, description: 'Latin' },
       { id: 19, description: 'World' },
       { id: 20, description: 'Pop Rock' },
    ]; 

    // O observable é assíceono. E o of é síncronomo 
    getGenres(): Observable<GenreListResponse>{
        return new Observable((observer) => {
            setTimeout(() => {
                observer.next(this.generesList);
                observer.complete(); 
            }, 2000); 
        })
    }

    getGenreDescription(genreId: number): string{
        const genreDescription = this.generesList.find(genre => genre.id === genreId)?.description;

        return genreDescription ? genreDescription : ''; 
    }
}