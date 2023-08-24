import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeOverviewComponent} from "./containers/home-overview/home-overview.component";

const routes: Routes = [
  {
    path: '',
    component: HomeOverviewComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
