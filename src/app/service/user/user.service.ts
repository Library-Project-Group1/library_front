import {Injectable, Input} from '@angular/core';
import { User } from 'src/app/models/user/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:8080/apiUsers/';

  constructor(private http: HttpClient) {
  }

  public findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl + 'allUsers');
  }

  public findUserById(userId: number): Observable<User> {
    return this.http.get<User>(this.usersUrl + '/user/' + userId);
  }

  public findUserByEmail(userEmail: string): Observable<User> {
    return this.http.get<User>(this.usersUrl + '/user/' + userEmail);
  }

  public deleteUserById(userID: number) {
    return this.http.delete<User>(this.usersUrl + '/deleteUser/' + userID);
  }

  public deleteUserByEmail(userEmail: string) {
    return this.http.delete<User>(this.usersUrl + '/deleteUser/' + userEmail);
  }

  public updateUserById(user: User) {
    return this.http.put<User>(this.usersUrl + '/user/' + user.id + '/editaccount', user, null);
  }

  public updateUserByEmail(user: User) {
    return this.http.put<User>(this.usersUrl + '/user/' + user.email + '/editaccount', user, null);
  }

  public createUser(user: User) {
    return this.http.post<User>(this.usersUrl + '/createUser', user, null);
  }
}
