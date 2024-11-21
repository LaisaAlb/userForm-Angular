import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StatesListResponse } from "../types/states-list-response";
import { stat } from "fs";

@Injectable({
  providedIn: 'root'
})
export class BrazilianStates {
  private readonly stateList: StatesListResponse = [
    { id: 12, descricao: 'Acre', descricaoContraida: 'AC' },
    { id: 27, descricao: 'Alagoas', descricaoContraida: 'AL' },
    { id: 16, descricao: 'Amapá', descricaoContraida: 'AP' },
    { id: 13, descricao: 'Amazonas', descricaoContraida: 'AM' },
    { id: 29, descricao: 'Bahia', descricaoContraida: 'BA' },
    { id: 23, descricao: 'Ceará', descricaoContraida: 'CE' },
    { id: 53, descricao: 'Distrito Federal', descricaoContraida: 'DF' },
    { id: 32, descricao: 'Espírito Santo', descricaoContraida: 'ES' },
    { id: 52, descricao: 'Goiás', descricaoContraida: 'GO' },
    { id: 21, descricao: 'Maranhão', descricaoContraida: 'MA' },
    { id: 51, descricao: 'Mato Grosso', descricaoContraida: 'MT' },
    { id: 50, descricao: 'Mato Grosso do Sul', descricaoContraida: 'MS' },
    { id: 31, descricao: 'Minas Gerais', descricaoContraida: 'MG' },
    { id: 15, descricao: 'Pará', descricaoContraida: 'PA' },
    { id: 25, descricao: 'Paraíba', descricaoContraida: 'PB' },
    { id: 41, descricao: 'Paraná', descricaoContraida: 'PR' },
    { id: 26, descricao: 'Pernambuco', descricaoContraida: 'PE' },
    { id: 22, descricao: 'Piauí', descricaoContraida: 'PI' },
    { id: 33, descricao: 'Rio de Janeiro', descricaoContraida: 'RJ' },
    { id: 24, descricao: 'Rio Grande do Norte', descricaoContraida: 'RN' },
    { id: 43, descricao: 'Rio Grande do Sul', descricaoContraida: 'RS' },
    { id: 11, descricao: 'Rondônia', descricaoContraida: 'RO' },
    { id: 14, descricao: 'Roraima', descricaoContraida: 'RR' },
    { id: 42, descricao: 'Santa Catarina', descricaoContraida: 'SC' },
    { id: 35, descricao: 'São Paulo', descricaoContraida: 'SP' },
    { id: 28, descricao: 'Sergipe', descricaoContraida: 'SE' },
    { id: 17, descricao: 'Tocantins', descricaoContraida: 'TO' }
  ];

  getStates(): Observable<StatesListResponse> {
    return new Observable((observer) => {
        setTimeout(() => {
            observer.next(this.stateList);
            observer.complete();
        }, 2000); 
    });
  }
  getStateDescription(stateId: number): string{
    const StateDescription = this.stateList.find(state => state.id === stateId)?.descricao;

    return StateDescription ? StateDescription : '';
  }

}
