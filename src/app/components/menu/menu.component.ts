import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public appMenu = [
    { title: 'Home',url: '/tabs/(Home:Home)',icon: 'home',line:'none'},
    { title: 'List',url: '/tabs/(List:List)',icon: 'list',line:'none'},
    { title: 'Profile',url: '/tabs/(Profile:Profile)',icon: 'contact',line:'none'},
    { title: 'More info',url: '',icon: 'add',line:'full'},
    { title: 'Push Notifications',url: '',icon: '',line:'full'},
    { title: 'Log off',url: '',icon: 'contact',line:'full'}
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  seleccionaOpcionMenu(opcionMenu){
    console.log('itemClicked',opcionMenu);
    this.router.navigateByUrl(opcionMenu.url);
  }
}
