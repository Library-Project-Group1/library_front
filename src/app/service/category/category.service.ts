import { Injectable } from '@angular/core';
import { Category } from '../../models/category/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoriesUrl = 'http://localhost:8080/apiCategories/';

  constructor(private http: HttpClient) { }

  public findAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl + 'allCategories');
  }

  public findCategoryById(categoryId: number): Observable<Category> {
    return this.http.get<Category>(this.categoriesUrl + '/category/' + categoryId);
  }

  public deleteCategoryById(categoryID: number) {
    return this.http.delete<Category>(this.categoriesUrl + '/deleteCategory/' + categoryID);
  }

  public updateCategoryById(category: Category) {
    return this.http.put<Category>(this.categoriesUrl + '/category/' + category.id + '/editCategory', category, null);
  }

  public createCategory(category: Category) {
    return this.http.post<Category>(this.categoriesUrl + '/createCategory', category, null);
  }
}
