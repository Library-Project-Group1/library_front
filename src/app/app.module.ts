import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserComponent} from './components/user/user/user.component';
import {UserService} from './service/user/user.service';
import {UserListComponent} from './components/user/user-list/user-list.component';
import {AppRoutingModule} from './app-routing.module';
import {UserFormComponent} from './components/user/user-form/user-form.component';
import {AdminHomeComponent} from './components/admin/admin-home/admin-home.component';
import {AddProductComponent} from './components/product/add-product/add-product.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import { ProductComponent } from './components/product/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    UserFormComponent,
    AdminHomeComponent,
    AddProductComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// ConfigComponent,
// MessageComponent

