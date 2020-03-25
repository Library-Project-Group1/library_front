import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserComponent} from './components/user/user/user.component';
import { UserService } from './service/user/user.service';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ThemeFormComponent } from './components/theme/theme-form/theme-form.component';
import { CategoryComponent } from './components/Category/category/category.component';
import { CategoryListComponent} from './components/Category/Category-list/category-list.component';
import { CategoryCreateComponent} from './components/Category/category-create/category-create.component';
import { ThemeComponent } from './components/theme/theme/theme.component';
import { AddThemeComponent } from './components/theme/add-theme/add-theme.component';
import { EditThemeComponent } from './components/theme/edit-theme/edit-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    UserFormComponent,
    AdminHomeComponent,
    ThemeFormComponent,
    CategoryComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    ThemeComponent,
    AddThemeComponent,
    EditThemeComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
