import { Component, OnInit } from '@angular/core';
import { UsersService } from '../create-user/shared/services/users/users.service';


@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

  users = [];
  searchName = '';

  constructor(private readonly usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().then(
      (response) => {
        this.users = response.data;        
      },
      () => {
        alert("no found users");
      }
    );
  }

  deleteUser(user: any) {
    this.usersService.deleteUserForIndex(user.id).then(
      () => {
        alert(`sdelete user ${user.first_name} ${user.last_name} successful`);
      },
      () => {
        alert("no delete user");
      }
    );
  }
}
