import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {User} from "../Shared/Modules/user";
import {UserInformationListComponent} from "../user-information-list/user-information-list.component";

@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [
    NgForOf,
    UserInformationListComponent
  ],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.css'
})
export class UserInformationComponent {
  fname: string = 'Jiya';
  lname: string ='Shah';

  users: User[] = [
    { id: 1, name: 'Jiya Shah', email: 'jiyajshah25@gmail.com', contacts: 456456, Admin:true },
    { id: 2, name: 'Javal Patel', email: 'javalptl@gmail.com', contacts: 54645, Admin: true },
    { id: 3, name: 'Manasvi Patel', email: 'm@gmail.com', contacts: 123123, Admin: false },
    { id: 4, name: 'Sakshi', email: 's@gmail.com', contacts: 5645484, Admin:false },
    { id: 5, name: 'Parimal', email: 'p@gmail.com', contacts: 8528787, Admin:false },
    { id: 6, name: 'Chaula', email: 'c@gmail.com', contacts: 6565466, Admin:true }
  ];




selectUser?: User;

selectedUser(user: User):void {
  this.selectUser = user;
}

}
