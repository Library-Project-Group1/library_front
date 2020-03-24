import { Injectable } from '@angular/core';
import { Category } from '../../models/category/category';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoriesUrl = 'http://localhost:8080/apiCategories/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  public findAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl + 'allCategories');
  }

  public findCategoryById(categoryId: number): Observable<Category> {
    return this.http.get<Category>(this.categoriesUrl + '/category/' + categoryId);
  }

  public deleteCategoryById(categoryID: number): Observable<Category> {
    return this.http.delete<Category>(this.categoriesUrl + '/deleteCategory/' + categoryID, this.httpOptions);
  }

  public updateCategoryById(category: Category): Observable<Category> {
    return this.http.put<Category>(this.categoriesUrl + '/category/' + category.id + '/editCategory', category, this.httpOptions);
  }

  public createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.categoriesUrl + '/createCategory', category, this.httpOptions);
  }
}
