import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/product/product';
import {ProductService} from '../../../service/product/product.service';
import {Router} from '@angular/router';
import {Theme} from '../../../models/theme/theme';
import {Category} from '../../../models/category/category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product;
  themes: Theme[];
  categories: Category[];

  constructor(
    private productService: ProductService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  addProduct(product: Product) {
    this.productService.createProduct(this.product).subscribe((result => this.goToProductList()),
      error => console.error('There are an error!', error));
  }

  goToProductList() {
    this.router.navigate(['../allProducts']);
  }

}
