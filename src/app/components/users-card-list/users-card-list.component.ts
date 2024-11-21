import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserListResponse } from '../../types/users-list-response';



@Component({
  selector: 'app-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrl: './users-card-list.component.scss'
})
export class UsersCardListComponent {
  @Input() usersList: UserListResponse = []; 
  @Output('onUserSelected') onUserSelectedEmitt = new EventEmitter<number>(); 

  onUserSelected(userIndex: number){
    this.onUserSelectedEmitt.emit(userIndex); 
  }
}
