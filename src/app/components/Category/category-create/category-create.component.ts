import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../../../service/category/category.service';
import {Category} from '../../../models/category/category';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  categories: Category[];
  category: Category;
  angForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  createCategory(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.categoryService.createCategory({name} as Category).subscribe(category => {
      this.categories.push(category);
      alert('Category successfully created !');
      this.router.navigate(['products/createProduct']);
    });
  }
}
