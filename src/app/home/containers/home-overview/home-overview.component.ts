import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-home-overview',
  template: `
    <app-main-layout>
      <app-header-nav header></app-header-nav>
      <router-outlet body></router-outlet>
    </app-main-layout>
  `,
  styleUrls: ['./home-overview.component.scss']
})
export class HomeOverviewComponent{
}
