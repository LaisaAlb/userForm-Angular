import { Pipe, PipeTransform } from '@angular/core';
import { BrazilianStates } from '../services/brazilian-states.service';

@Pipe({
  name: 'stateDescription'
})
export class StateDescriptionPipe implements PipeTransform {

  constructor (
    private readonly _braziliaNStates: BrazilianStates
  ){}
  transform(stateId: number): string {
    return this._braziliaNStates.getStateDescription(stateId);
  }

}
