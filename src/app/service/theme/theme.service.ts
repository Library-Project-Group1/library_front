import { Injectable } from '@angular/core';
import { Theme } from '../../models/theme/theme';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themesUrl = 'http://localhost:8080/apiThemes/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  public findAllThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(this.themesUrl + 'allThemes');
  }

  public findThemeById(themeId: number): Observable<Theme> {
    return this.http.get<Theme>(this.themesUrl + 'theme/' + themeId);
  }

  public deleteThemeById(themeID: number) {
    return this.http.delete<Theme>(this.themesUrl + 'deleteTheme/' + themeID, this.httpOptions);
  }

  public updateThemeById(theme: Theme): Observable<void> {
    return this.http.put<void>(`${this.themesUrl}edit/${theme.id}/editTheme`, theme, this.httpOptions);
  }

  public createTheme(theme: Theme) {
    return this.http.post<Theme>(this.themesUrl + 'createTheme', theme, this.httpOptions);
  }
}
