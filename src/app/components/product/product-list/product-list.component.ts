import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product/product';
import {ProductService} from '../../../service/product/product.service';
import {Category} from '../../../models/category/category';
import {Theme} from '../../../models/theme/theme';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  products: Product[];

  @Input()
  product: Product;

  // productId: number;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.findAllProducts().subscribe((products => this.products = products),
      error => console.error('There are an error', error));
  }

  public onDelete(productId: number) {
    this.productService.deleteProductById(productId).subscribe((result => this.ngOnInit()),
      error => console.error('There are an error', error));
  }

  ngOnDestroy(productId: number) {
    this.productService.findProductById(productId).subscribe((product => this.productService.product = product),
        error => console.error('There are n error', error));
  }
}
