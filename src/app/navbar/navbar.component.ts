import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbartext:string = "Login" 

  constructor() { }

  ngOnInit(): void {
    document.getElementById('first')?.classList.add('selected')
  }

  login(){
    console.log('login');
  }

}
