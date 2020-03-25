import {Injectable} from '@angular/core';
import {Product} from '../../models/product/product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public product: Product;

  public productId: number;

  private productsUrl = 'http://localhost:8080/apiProducts/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  public findAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl + 'allProducts');
  }

  public findProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(this.productsUrl + 'product/' + productId);
  }

  public deleteProductById(productID: number) {
    return this.http.delete<Product>(this.productsUrl + 'deleteProduct/' + productID, this.httpOptions);
  }

  public updateProductById(product: Product) {
    return this.http.put<Product>(this.productsUrl + 'product/' + product.id + '/editProduct', product.price, this.httpOptions);
  }

  // TODO à combiner avec celle du dessus (idem restController)
  public updateStockProductById(product: Product) {
    return this.http.put<Product>(this.productsUrl + 'product/' + product.id + '/editStockProduct', product, this.httpOptions);
  }

  public createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl + 'createProduct', product, this.httpOptions).pipe(
      catchError(this.handleError<Product>('createProduct'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
