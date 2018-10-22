import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tabs, Tab } from '@ionic/angular';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @ViewChild('ionTabs') ionTabs:Tabs
  public appTabs = [
    { title: 'Home',url: '/Home',icon: 'home'},
    { title: 'List',url: '/List',icon: 'list'},
    { title: 'Profile',url: '/Profile',icon: 'contact'}
  ];
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.route.url);
  }
  
  selectTab(evento, tabs: Tabs){
    console.log(this.route);
    console.log(this.route.pathFromRoot);
    console.log(this.route.firstChild);
    console.log(this.route.parent);

   }
  
   ionSelect(seletedTab: string) {
    console.log(seletedTab);

 }
}
