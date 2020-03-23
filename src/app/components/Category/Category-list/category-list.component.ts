import {Component, Input, OnInit} from '@angular/core';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
  ) {
  }

  ngOnInit(): void {
    this.categoryService.findAllCategories().subscribe((categories => this.categories = categories),
      error1 => console.error('There are an error!', error1));
  }

  editCategory() {
    this.categoryService.updateCategoryById(this.category).subscribe(result => this.goToEditCategory()),
      console.error('There are an error!', error);
  }

  goToEditCategory() {
    this.router.navigate(['../category/{id}/editCategory']);
  }

  removeCategory() {
    this.category.id = this.route.snapshot.params.categoryID;
    this.categoryService.deleteCategoryById(this.category.id).subscribe((data) => {
    console.log('succes');
    });
  }
}
