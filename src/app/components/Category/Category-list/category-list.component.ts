import {Component, Input, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import {Category} from '../../../models/category/category';
import {CategoryService} from '../../../service/category/category.service';
import {error} from '@angular/compiler/src/util';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  @Input()
  categories: Category[];
  category: Category;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.categoryService.findAllCategories().subscribe((categories => this.categories = categories),
      error1 => console.error('There are an error!', error1));
  }

  removeCategory(category: Category) {
    this.categoryService.deleteCategoryById(category.id).subscribe((result => this.ngOnInit()),
      error => console.error('There are an error', error));
    alert('Category successfully deleted!');
  }
  createCategory(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.categoryService.createCategory({name} as Category)
      .subscribe(category => {
        this.categories.push(this.category);
        alert('Category successfully created !');
        this.router.navigate(['categories/listCategories']);
      });
  }
}
