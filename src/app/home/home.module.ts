import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import * as fromComponents from './components';
import * as fromContainers from './containers'
import {HeaderNavComponent} from "../shared/components/header-nav/header-nav.component";

@NgModule({
  declarations: [...fromComponents.components, ...fromContainers.containers],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderNavComponent
  ]
})
export class HomeModule { }
