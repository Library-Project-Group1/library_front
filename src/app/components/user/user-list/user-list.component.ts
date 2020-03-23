import {Component, OnInit, Input} from '@angular/core';
import {User} from '../../../models/user/user';
import {UserService} from '../../../service/user/user.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()
  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAllUsers().subscribe((users => this.users = users),
      error => console.error('There are an error!', error));
  }

}


