import {Component, Input, OnInit} from '@angular/core';
import { User } from '../user';
import { UserService } from '../service/user.service';
import { AppComponent } from '../app.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {



  // user: User = {
  //   id: 1,
  //   userName: "UnNom",
  //   email: "unmailaupif@pif.com",
  //   password: "pwsecret"
  // };

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }


  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }

}
