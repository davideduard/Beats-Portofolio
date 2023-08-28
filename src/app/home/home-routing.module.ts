import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeOverviewComponent } from "./containers/home-overview/home-overview.component";
import {BeatsPageComponent, ContactPageComponent, HomePageComponent, KitsPageComponent} from "./components";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: HomeOverviewComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent,
        pathMatch: 'full',
      },
      {
        path: 'beats',
        component: BeatsPageComponent,
        pathMatch: 'full'
      },
      {
        path: 'contact',
        component: ContactPageComponent,
        pathMatch: 'full'
      },
      {
        path: 'kits',
        component: KitsPageComponent,
        pathMatch: "full"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
