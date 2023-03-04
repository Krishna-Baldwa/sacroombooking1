import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbartext:string = "Login" 
  prevurl!:string

  constructor() { }

  ngOnInit(): void {
    
  }

  navigate(url:string){
    document.getElementById(url)?.classList.add('selected')
    document.getElementById(this.prevurl)?.classList.remove('selected')
    this.prevurl = url
  }

  login(){
    console.log('login');
  }

}
