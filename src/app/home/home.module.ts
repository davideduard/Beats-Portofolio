import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import * as fromComponents from './components';
import * as fromContainers from './containers'
import {HeaderNavComponent} from "../shared/components/header-nav/header-nav.component";
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { KitsPageComponent } from './components/kits-page/kits-page.component';
import { BeatsPageComponent } from './components/beats-page/beats-page.component';

@NgModule({
  declarations: [...fromComponents.components, ...fromContainers.containers, HomePageComponent, ContactPageComponent, KitsPageComponent, BeatsPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderNavComponent
  ]
})
export class HomeModule { }
