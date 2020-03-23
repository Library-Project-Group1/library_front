import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './components/user/user/user.component';
import {UserListComponent} from './components/user/user-list/user-list.component';
import {UserFormComponent} from './components/user/user-form/user-form.component';
import {ProductComponent} from './components/product/product/product.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {AddProductComponent} from './components/product/add-product/add-product.component';

const routes: Routes = [
  {path: '', redirectTo: '/home-admin', pathMatch: 'full'},
  {path: 'users', component: UserComponent},
  {path: 'users/listUsers', component: UserListComponent},
  {path: 'users/createUser', component: UserFormComponent},
  {path: 'products', component: ProductComponent},
  {path: 'products/listProducts', component: ProductListComponent},
  {path: 'products/createProduct', component: AddProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
