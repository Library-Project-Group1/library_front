import {Injectable, Input} from '@angular/core';
import { User } from 'src/app/user';
import {UserListComponent} from '../user-list/user-list.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {MessageService} from '../message.service';
import { catchError, map, tap } from 'rxjs/operators';
import {of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;
  private usersUrl: 'http://localhost8080/api/';

  constructor(private http: HttpClient, private messageService: MessageService) {
    this.url = 'http://localhost8080/api/';
  }

  public findAll(): Observable<User[]> {
    // this.messageService.add('UserService: fetched users');
    return this.http.get<User[]>(this.url+'allUsers');
  }

  // getUser(id: number): Observable<User> {
  //   this.messageService.add(`UserService: fetched user id=${id}`);
  //   return of(User.find(user => user.id === id));
  // }
  // /** GET hero by id. Will 404 if id not found */
  // getHero(id: number): Observable<Hero> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.get<Hero>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Hero>(`getHero id=${id}`))
  //   );
  // }


  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  // /** POST: add a new hero to the server */
  // addHero (hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
  //     tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
  //     catchError(this.handleError<Hero>('addHero'))
  //   );
  // }


  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
