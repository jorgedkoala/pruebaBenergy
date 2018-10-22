import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';

import { SettingsService } from './providers/settings/settings.service';//Carga y guarda el perfil y otras variables globlales que se quieran usar
import {Profile} from '../models/profile';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private settings: SettingsService,
    private translate: TranslateService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
      setTimeout(()=>{this.splashScreen.hide()},500)
      this.initTranslate();
      this.settings.startProfile();//CREA Y-O ACTUALIZA EL PERFIL
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('es');
    this.translate.use('es')
    const browserLang = this.translate.getBrowserLang();

    // if (browserLang) {
    //     this.translate.use(this.translate.getBrowserLang());
    // } else {
    //   this.translate.use('es'); // Set your language here
    // }
  }


}
