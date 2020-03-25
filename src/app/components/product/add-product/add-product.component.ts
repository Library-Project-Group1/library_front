import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/product/product';
import {ProductService} from '../../../service/product/product.service';
import {Router} from '@angular/router';
import {Theme} from '../../../models/theme/theme';
import {Category} from '../../../models/category/category';
import {Validators} from '@angular/forms';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product;
  products: Product[];
  themes: Theme[];
  categories: Category[];
  fg: FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  addProduct(product: Product) {
    this.productService.createProduct(this.product).subscribe(result => {
      this.products.push(product);
      this.goToProductList();
    });
  }

  createForm() {
    this.fg = this.fb.group({
      prod: ['', Validators.required],
    });
  }

  goToProductList() {
    this.router.navigate(['../allProducts']);
  }

}
