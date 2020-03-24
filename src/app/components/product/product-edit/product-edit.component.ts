import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product/product';
import {ProductService} from '../../../service/product/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.findProductById(this.product.id).subscribe((product => this.product = product),
      error => console.error('There are an error', error));
  }


  // onEdit(productId: number) {
  //   this.productService.findProductById(productId).subscribe((result => this.ngOnInit()),
  //     error => console.error('There are n error', error))
  // }

}
