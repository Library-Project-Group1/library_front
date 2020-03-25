import { Injectable } from '@angular/core';
import { Theme } from '../../models/theme/theme';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {tap} from 'rxjs/operators';
import {map} from 'rxjs-compat/operator/map';
import {MessageService} from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themesUrl = 'http://localhost:8080/apiThemes/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private log(message: string) {
    this.messageService.add(`ThemeService: ${message}`);
  }

  constructor(private http: HttpClient, private messageService: MessageService) { }

  public findAllThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(this.themesUrl + 'allThemes');
  }

  public findThemeById(themeId: number): Observable<Theme> {
    return this.http.get<Theme>(this.themesUrl + 'theme/' + themeId);
  }


  public deleteThemeById(themeID: number) {
    return this.http.delete<Theme>(this.themesUrl + 'deleteTheme/' + themeID, this.httpOptions);
  }

  public updateThemeById(theme: Theme) {
    return this.http.put<void>(this.themesUrl + '/theme/' + theme.id + '/editTheme', theme, this.httpOptions);
  }

  public createTheme(theme: Theme) {
    return this.http.post<Theme>(this.themesUrl + 'createTheme', theme, this.httpOptions);
  }
}
