import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeOverviewComponent } from "./containers/home-overview/home-overview.component";
import {HomePageComponent} from "./components";

const routes: Routes = [
  {
    path: '',
    component: HomeOverviewComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent,
        pathMatch: 'full'
      },
      {
        path: 'beats',
        component: HomePageComponent,
        pathMatch: 'full'
      },
      {
        path: 'contact',
        component: HomePageComponent,
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
