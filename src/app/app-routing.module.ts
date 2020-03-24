import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user/user.component';
import {UserListComponent} from './components/user/user-list/user-list.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import {AdminHomeComponent} from './components/admin/admin-home/admin-home.component';
import {CategoryComponent} from './components/Category/Category/category.component';
import {CategoryListComponent} from './components/Category/Category-list/category-list.component';
import {ThemeFormComponent} from './components/theme/theme-form/theme-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/admin-home', pathMatch: 'full' },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'users/listUsers', component: UserListComponent },
  { path: 'users/createUser', component: UserFormComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'categories/listCategories', component: CategoryListComponent},
  { path: 'themes', component: ThemeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
