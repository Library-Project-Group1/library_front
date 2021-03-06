import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product/product';
import {ProductService} from '../../../service/product/product.service';
import {Category} from '../../../models/category/category';
import {Theme} from '../../../models/theme/theme';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
    this.displayList();
  }

  public displayList() {
    this.productService.findAllProducts().subscribe((products => this.products = products),
      error => console.error('There are an error', error));
  }

  public onDelete(productId: number) {
    this.productService.deleteProductById(productId).subscribe((result => this.displayList()),
      error => console.error('There are an error', error));
  }
}
