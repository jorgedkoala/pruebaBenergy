import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  public appTabs = [
    { title: 'Home',url: '/tabs/(tabs:Home)',icon: 'home'},
    { title: 'List',url: '/tabs/(tabs:List)',icon: 'list'},
    { title: 'Profile',url: '/tabs/(tabs:Profile)',icon: 'contact'}
  ];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  selectTab(evento){
    console.log(this.route);
    console.log(this.route.pathFromRoot);
    console.log(this.route.firstChild);
    console.log(this.route.parent);

   }
  
   ionSelect(seletedTab: string) {
   // console.log(seletedTab);

 }
}
