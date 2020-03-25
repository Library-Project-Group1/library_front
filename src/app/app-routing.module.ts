import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './components/user/user/user.component';
import {UserListComponent} from './components/user/user-list/user-list.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import {TransactionComponent} from './components/transaction/transaction/transaction.component';
import {AdminHomeComponent} from './components/admin/admin-home/admin-home.component';
import {ProductComponent} from './components/product/product/product.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {AddProductComponent} from './components/product/add-product/add-product.component';
import {ProductEditComponent} from './components/product/product-edit/product-edit.component';
import {CategoryComponent} from './components/Category/category/category.component';
import {CategoryListComponent} from './components/Category/Category-list/category-list.component';
import {ThemeFormComponent} from './components/theme/theme-form/theme-form.component';
import {CategoryCreateComponent} from './components/Category/category-create/category-create.component';
import {ThemeCreateComponent} from './components/theme/theme-create/theme-create.component';
import {CategoryEditComponent} from './components/Category/category-edit/category-edit.component';
import {ThemeEditComponent} from './components/theme/theme-edit/theme-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin-home', pathMatch: 'full' },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'users/listUsers', component: UserListComponent },
  { path: 'users/createUser', component: UserFormComponent },
  { path: 'transaction', component: TransactionComponent},
  {path: 'products', component: ProductComponent},
  {path: 'products/listProducts', component: ProductListComponent},
  {path: 'products/createProduct', component: AddProductComponent},
  {path: 'products/listProducts/edit/:id', component: ProductEditComponent},
  {path: 'categories', component: CategoryComponent },
  {path: 'categories/listCategories', component: CategoryListComponent},
  {path: 'categories/createCategory', component: CategoryCreateComponent},
  {path: 'categories/listCategories/edit/:id', component: CategoryEditComponent},
  {path: 'themes/listThemes', component: ThemeFormComponent},
  {path: 'themes/createTheme', component: ThemeCreateComponent},
  {path: 'themes/listThemes/edit/:id', component: ThemeEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
