import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import * as fromComponents from './components'

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
