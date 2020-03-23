import {Component, Input, OnInit} from '@angular/core';
import { User } from '../../../models/user/user';
import { UserService } from '../../../service/user/user.service';
import { AppComponent } from '../../../app.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
