import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product/product';
import {ProductService} from '../../../service/product/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  // @Input()
  product: Product;

  productId: number;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = this.productService.product;
    // this.onEdit(this.productId = this.productService.productId);
    // this.productService.findProductById(this.productId).subscribe((product => this.product = product),
    //      error => console.error('There are n error', error))

  }


  // onEdit(productId: number) {
  //   this.productService.findProductById(this.productId).subscribe((product => this.product = product),
  //     error => console.error('There are n error', error))
  // }

}
