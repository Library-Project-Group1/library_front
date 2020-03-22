import { Injectable } from '@angular/core';
import { Admin } from '../../models/admin/admin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminsUrl = 'http://localhost:8080/apiAdmins/';

  constructor(private http: HttpClient) { }

  public findAllAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.adminsUrl + 'allAdmins');
  }

  public findAdminById(adminId: number): Observable<Admin> {
    return this.http.get<Admin>(this.adminsUrl + '/admin/' + adminId);
  }

  public findAdminByUsername(username: string): Observable<Admin> {
    return this.http.get<Admin>(this.adminsUrl + '/admin/' + username);
  }

  public deleteAdminById(adminID: number) {
    return this.http.delete<Admin>(this.adminsUrl + '/deleteAdmin/' + adminID);
  }

  public deleteAdminByUsername(username: string) {
    return this.http.delete<Admin>(this.adminsUrl + '/deleteAdmin/' + username);
  }

  public updateAdminById(admin: Admin) {
    return this.http.put<Admin>(this.adminsUrl + '/admin/' + admin.id + '/editaccount', admin, null);
  }

  public updateAdminByUsername(admin: Admin) {
    return this.http.put<Admin>(this.adminsUrl + '/admin/' + admin.userName + '/editaccount', admin, null);
  }

  public createAdmin(admin: Admin) {
    return this.http.post<Admin>(this.adminsUrl + '/createAdmin', admin, null);
  }
}
