import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { ListPage } from '../list/list.page';
import { ProfilePage } from '../profile/profile.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(Home:Home)',
        pathMatch: 'full',
      },
      {
        path: 'Home',
        outlet: 'Home',
        component: HomePage
      },
      {
        path: 'List',
        outlet: 'List',
        component: ListPage
      },
      {
        path: 'Profile',
        outlet: 'Profile',
        component: ProfilePage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(Home:Home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
