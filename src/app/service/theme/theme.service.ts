import { Injectable } from '@angular/core';
import { Theme } from '../../models/theme/theme';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themesUrl = 'http://localhost:8080/apiThemes/';

  constructor(private http: HttpClient) { }

  public findAllThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(this.themesUrl + 'allThemes');
  }

  public findThemeById(themeId: number): Observable<Theme> {
    return this.http.get<Theme>(this.themesUrl + '/theme/' + themeId);
  }

  public deleteThemeById(themeID: number) {
    return this.http.delete<Theme>(this.themesUrl + '/deleteTheme/' + themeID);
  }

  public updateThemeById(theme: Theme) {
    return this.http.put<Theme>(this.themesUrl + '/theme/' + theme.id + '/editTheme', theme, null);
  }

  public createTheme(theme: Theme) {
    return this.http.post<Theme>(this.themesUrl + '/createTheme', theme, null);
  }
}
