import { Pipe, PipeTransform } from '@angular/core';
import { GenreService } from '../services/genres.service';

@Pipe({
  name: 'genreDescription'
})
export class GenreDescriptionPipe implements PipeTransform {

  constructor(
    private readonly _genreService: GenreService
    ){}

  transform(genreId: number): string {
    return this._genreService.getGenreDescription(genreId); 
  }

}
