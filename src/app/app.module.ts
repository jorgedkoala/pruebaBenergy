import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule, Storage } from '@ionic/storage';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//************************PLUGINS */
//import { WebView } from '@ionic-native/ionic-webview/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
//************************PLUGINS */


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//***********************MIS COMPONENTS */
import { MenuComponent } from './components/menu/menu.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoComponent } from './components/video/video.component';
//***********************MIS COMPONENTS */

//***********************MIS PAGES */
//import { ProfilePage } from './pages/profile/profile.page';
//***********************MIS PAGES */



// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent, 
  /******MIS COMPONENTS */
    MenuComponent, 
    TabsComponent, 
    HeaderComponent, 
    VideoComponent,
  //*****MIS PAGES */
  //ProfilePage
  ],
  entryComponents: [
    VideoComponent,
  //  ProfilePage
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot({name: 'bEnergy',
    driverOrder: ['sqlite', 'websql','indexeddb','localstorage']}),
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    StreamingMedia,
    YoutubeVideoPlayer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
