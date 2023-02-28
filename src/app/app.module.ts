import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateRequestComponent } from './userpage/create-request/create-request.component';

@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent,
    AdminpageComponent,
    NavbarComponent,
    CreateRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
