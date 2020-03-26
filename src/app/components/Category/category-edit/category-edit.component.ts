import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../models/category/category';
import {CategoryService} from '../../../service/category/category.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  @Input()
  category: Category;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.categoryService
        .findCategoryById(id)
        .subscribe((category => {
            this.category = category;
          }),
          error => console.error('There are an error', error));
    });
  }

  goBack(): void {
    this.location.back();
  }

  updateCategory(): void {
    this.categoryService.updateCategoryById(this.category)
      .subscribe(result => this.goBack());
  }

}
