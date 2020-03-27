import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/product/product';
import {ProductService} from '../../../service/product/product.service';
import {Router} from '@angular/router';
import {Theme} from '../../../models/theme/theme';
import {Category} from '../../../models/category/category';
import {FormControl, Validators} from '@angular/forms';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CategoryService} from '../../../service/category/category.service';
import {ThemeService} from '../../../service/theme/theme.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product;
  products: Product[];
  themes: Theme[];
  theme: Theme;
  categories: Category[];
  category: Category;
  fg: FormGroup;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private themeService: ThemeService,
    private router: Router,
    private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.categoryService.findAllCategories().subscribe((categories => this.categories = categories),
      error => console.error('There are an error', error));
    this.themeService.findAllThemes().subscribe((themes => this.themes = themes),
      error => console.error('There are an error', error));
  }

  addProduct(category: number, theme: number, title: string, creator: string, releaseDate: Date,
             description: string, price: number, quantityTotal: number, quantityAvailableToRent: number, quantityIsRenting: number): void {
    // title = title.trim();
    // if (!title) {
    //   return;
    // }
    this.productService.createProduct({
      category,
      theme,
      title,
      creator,
      releaseDate,
      description,
      price,
      quantityTotal,
      quantityAvailableToRent,
      quantityIsRenting
    } as unknown as Product).subscribe();
  }

  createForm() {
    this.fg = this.fb.group({
      category: ['', Validators.required],
      theme: ['', Validators.required],
      title: ['', Validators.required],
      creator: ['', Validators.required],
      releaseDate: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantityTotal: ['', Validators.required],
      quantityAvailable: ['', Validators.required],
      quantityRented: ['', Validators.required],
    });
  }


}
