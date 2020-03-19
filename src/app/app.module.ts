import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserService } from './service/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
// import { UserFormComponent } from './user-form/user-form.component';
// import { ConfigComponent } from './config/config.component';

// import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// UserFormComponent,
// ConfigComponent,
// MessageComponent

// AppRoutingModule,
