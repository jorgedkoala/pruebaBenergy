import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePage } from './pages/profile/profile.page';


const routes: Routes = [
//  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
//  { path: 'Home', loadChildren: './pages/home/home.module#HomePageModule' },
//  { path: 'List', loadChildren: './pages/list/list.module#ListPageModule' },
//  { path: 'Profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' }
 // { path: 'Profile', component: ProfilePage }
  //{ path: 'video', loadChildren: './pages/video/video.module#VideoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
