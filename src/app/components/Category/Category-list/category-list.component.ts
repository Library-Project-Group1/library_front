import {Component, Input, OnInit, HostListener} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Category} from '../../../models/category/category';
import {CategoryService} from '../../../service/category/category.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  @Input()
  categories: Category[];
  category: Category;
  selectedCategory: Category;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
  ) {
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  ngOnInit(): void {
    this.categoryService.findAllCategories().subscribe((categories => this.categories = categories),
      error1 => console.error('There are an error!', error1));
  }

  removeCategory(category: Category) {
    this.categoryService.deleteCategoryById(category.id).subscribe();
  }

  // @HostListener('document:keypress', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   if (event.code === 'Enter' && this.category.name != null) {
  //     this.addCategory(this.category.name);
  //   }
  // }
  createCategory(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.categoryService.createCategory({name} as Category)
      .subscribe(category => {
        this.categories.push(category);
        alert('Category created successfully !');
      });
  }

  updateCategory(category: Category) {
    this.categoryService.updateCategoryById(category).subscribe(newCategory => {
      this.category = newCategory;
    });
  }
}
