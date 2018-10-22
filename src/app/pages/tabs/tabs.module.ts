import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

//*************MIS COMPONENTS PARA TABS */
import { TabsPageRoutingModule } from './tabs.router.module';
import { ListPageModule } from '../list/list.module';
import { ProfilePageModule } from '../profile/profile.module';
import { HomePageModule } from '../home/home.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    //RouterModule.forChild(routes)
    TabsPageRoutingModule,
    HomePageModule,
    ListPageModule,
    ProfilePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
