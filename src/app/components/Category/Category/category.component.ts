import { Component, Input, OnInit } from '@angular/core';
import {Category} from '../../../models/category/category';
import {CategoryService} from '../../../service/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

}
