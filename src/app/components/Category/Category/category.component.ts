import { Component, Input, OnInit } from '@angular/core';
import {Category} from '../../../models/category/category';
import {CategoryService} from '../../../service/category/category.service';
import {error} from '@angular/compiler/src/util';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  addSubmit() {
    this.categoryService.createCategory(this.category).subscribe(result => this.goToCreateCategory()),
      console.error('There are an error!', error);
  }

  goToCreateCategory() {
    this.router.navigate(['.."/createCategory"']);
  }
}
