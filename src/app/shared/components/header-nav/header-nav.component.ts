import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: '' +
    '' +
    '' +
    'app-header-nav',
  standalone: true,
  template: `
    <div class="w-full flex flex-row gap-8">
      <div class="flex flex-row gap-1 h-[50px] mt-8">
        <div class="eq-bar animate-scaleTypeOne"></div>
        <div class="eq-bar animate-scaleTypeTwo"></div>
        <div class="eq-bar animate-scaleTypeThree"></div>
      </div>

      <div class="flex flex-row gap-16 justify-center items-center">
        <button class="nav-button animate-fadeIn" routerLink="home" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</button>
        <button class="nav-button animate-fadeIn" routerLink="beats" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Beats</button>
        <button class="nav-button animate-fadeIn" routerLink="contact" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Contact</button>
        <button class="nav-button animate-fadeIn" routerLink="kits" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Shop Kits</button>
      </div>
    </div>
  `,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {

}
