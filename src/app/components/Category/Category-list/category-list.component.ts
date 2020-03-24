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
  selectedCategory: Category;
  editForm: FormGroup;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
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
    alert('Category successfully deleted!');
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
        alert('Category successfully created !');
      });
  }

  // updateCategory(category: Category) {
  //   this.categoryService.updateCategoryById(category, category.name).subscribe(newCategory => {
  //     this.category = newCategory;
  //   });
  // }
  updateCategory(category: Category) {
    const categoryId = window.localStorage.getItem('editCategoryId');
    if (!categoryId) {
      alert('Invalid action.');
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
    });
    this.categoryService.findCategoryById(category.id)
      .subscribe(() => {
        this.editForm.setValue(name);
      });
  }

  onSubmit() {
    this.categoryService.updateCategoryById(this.editForm.value)
      .pipe(first())
      .subscribe(
        name => {
          if (name != null) {
            alert('Category successfully updated !');
            this.router.navigate(['list-user']);
          } else {
            alert('Category has name = null');
          }
        });
  }
}
