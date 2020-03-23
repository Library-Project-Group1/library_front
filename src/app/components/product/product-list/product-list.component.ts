import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product/product';
import {ProductService} from '../../../service/product/product.service';
import {Category} from '../../../models/category/category';
import {Theme} from '../../../models/theme/theme';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.findAllProducts().subscribe((products => this.products = products),
      error => console.error('There are an error', error));
  }

}
