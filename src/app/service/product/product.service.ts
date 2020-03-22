import { Injectable } from '@angular/core';
import { Product } from '../../models/product/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'http://localhost:8080/apiProducts/';

  constructor(private http: HttpClient) { }

  public findAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl + 'allProducts');
  }

  public findProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(this.productsUrl + '/product/' + productId);
  }

  public deleteProductById(productID: number) {
    return this.http.delete<Product>(this.productsUrl + '/deleteProduct/' + productID);
  }

  public updateProductById(product: Product) {
    return this.http.put<Product>(this.productsUrl + '/product/' + product.id + '/editProduct', product, null);
  }

  // TODO à combiner avec celle du dessus (idem restController)
  public updateStockProductById(product: Product) {
    return this.http.put<Product>(this.productsUrl + '/product/' + product.id + '/editStockProduct', product, null);
  }

  public createProduct(product: Product) {
    return this.http.post<Product>(this.productsUrl + '/createProduct', product, null);
  }
}
