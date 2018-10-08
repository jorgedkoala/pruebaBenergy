import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  public appMenu = [
    { title: 'Home',url: '/Home',icon: 'home',line:'none'},
    { title: 'List',url: '/List',icon: 'list',line:'none'},
    { title: 'Profile',url: '/Profile',icon: 'contact',line:'none'},
    { title: 'More info',url: '',icon: 'add',line:'full'},
    { title: 'Push Notifications',url: '',icon: '',line:'full'},
    { title: 'Log off',url: '',icon: 'contact',line:'full'}
  ];
  public appTabs = [
    { title: 'Home',url: '/Home',icon: 'home'},
    { title: 'List',url: '/List',icon: 'list'},
    { title: 'Profile',url: '/Profile',icon: 'contact'}
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();

    });
  }

  selectTab(event){
    console.log(event);
  }

  buttonClick(event){
    console.log('itemClicked',event);
  }

}
