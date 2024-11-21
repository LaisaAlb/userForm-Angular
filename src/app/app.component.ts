import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenreService } from './services/genres.service';
import { BrazilianStates } from './services/brazilian-states.service';
import { UserListResponse } from './types/users-list-response';
import { GenreListResponse } from './types/genres-list-response';
import { StatesListResponse } from './types/states-list-response';
import { IUser } from './interfaces/user/user.interface';
import { UserBeforeAndAfterDialogComponent } from './components/user-before-and-after-dialog/user-before-and-after-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { identity } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  userSelected: IUser = {} as IUser; 
  userSelectedIndex: number | undefined; 

  usersList: UserListResponse = []; 
  genreList: GenreListResponse = []; 
  statesList: StatesListResponse = []; 

  constructor(
    private readonly _userService: UsersService,
    private readonly _genresService: GenreService, 
    private readonly _BrazilianStateService: BrazilianStates,
    private readonly _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getGenres(); 
    this.getStatesList();
  }

  onFormSubmit() {
    if(this.userSelectedIndex === undefined) return;

    const originalUser = this.usersList[this.userSelectedIndex];

    this.openBeforeAndAfterDialog(originalUser, this.userSelected, this.userSelectedIndex); 
  }

  openBeforeAndAfterDialog(originalUser: IUser, updateUser: IUser, userSelectedIndex: number) {
    const dialogRef = this._matDialog.open(UserBeforeAndAfterDialogComponent, {
      data: {
        originalUser: originalUser,
        updateUser: updateUser
      },
      minWidth: '99%', 
    })

    dialogRef.afterClosed().subscribe((result)=>{
      if(result){
        this.confirmUserUpdate(updateUser, userSelectedIndex );
      }
    })
  }
  confirmUserUpdate(updateUser: IUser, userSelectedIndex: number) {
    this.usersList[userSelectedIndex] = structuredClone(updateUser);
  }
  
  private getUsers() {
    this._userService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
    });
  }

  private getGenres(){
    this._genresService.getGenres().subscribe((genresListResponse) => {
      this.genreList = genresListResponse;
    }); 
  }

  private getStatesList(){
    this._BrazilianStateService.getStates().subscribe((statesListResponse) => {
      this.statesList = statesListResponse;
    })
  }

  onUserSelected(userIndex: number){
    const userFound = this.usersList[userIndex]; 

    if(userFound){
      this.userSelectedIndex = userIndex; 
      this.userSelected = structuredClone(userFound); 
    }
  }
}
