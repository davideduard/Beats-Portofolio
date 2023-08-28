import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-main-layout',
  template: `
    <div class="gradient relative">
      <div class="w-full flex flex-row gap-16 items-center justify-end h-[10vh] pr-20 absolute z-10">
        <ng-content select="[header]"></ng-content>
      </div>
      <div class="w-full h-[100vh] flex flex-col items-center justify-center relative">
        <ng-content select="[body]"></ng-content>
      </div>
    </div>

  `,
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent{
}
