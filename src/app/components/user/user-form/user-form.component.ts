import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../service/user/user.service';
import {User} from '../../../models/user/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
    // this.user = new User();
  }

  ngOnInit(): void {
  }


  // TODO Tout ne fonctionne pas: vérifier que le submit fonctionne soit dans formulaire soit dans le
  //  bouton submit à voir si la redirection fonctionne et si elle s'écrit bien comme ça dans le component et html
  onSubmit() {
    this.userService.createUser(this.user).subscribe((result => this.gotoUserList()),
      error => console.error('There are an error!', error));
  }

  gotoUserList() {
    this.router.navigate(['../allUsers']);
  }


  // TODO éventuellement s'inspirer de ça pour check si les champs sont vides ou pas mais à faire surtout
  //  dans le formulaire (pattern/ required etc...)
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }

}
