import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { UserComponent} from './components/user/user/user.component';
import { UserService } from './service/user/user.service';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { TransactionComponent } from './components/transaction/transaction/transaction.component';
import { TransactionListComponent } from './components/transaction/transaction-list/transaction-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    UserFormComponent,
    AdminHomeComponent,
    TransactionComponent,
    TransactionListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
