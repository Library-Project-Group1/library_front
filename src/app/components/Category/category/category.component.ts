import { Component, Input, OnInit } from '@angular/core';
import {Category} from '../../../models/category/category';
import {CategoryService} from '../../../service/category/category.service';
import {Theme} from '../../../models/theme/theme';
import {ThemeService} from '../../../service/theme/theme.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category;
  theme: Theme;

  constructor(
    private categoryService: CategoryService,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
  }
}
