import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.productService
        .findProductById(id)
        .subscribe((product => {
        this.product = product;
        }),
            error => console.error('There are n error', error));
    });
  }

  goBack(): void {
    this.location.back();
  }

  saveUpdateProduct(): void {
    this.productService.updateProductById(this.product)
      .subscribe(() => this.goBack());
  }


}
