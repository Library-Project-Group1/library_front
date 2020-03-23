import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product/product';
import {ProductService} from '../../../service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

}
