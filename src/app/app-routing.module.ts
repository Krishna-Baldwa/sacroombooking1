import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
  { path: '', component:NavbarComponent },
  { path:'user', component:UserpageComponent },
  { path: 'admin', component:AdminpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
