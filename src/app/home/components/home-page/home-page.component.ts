import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <div class="relative">
      <img src="/assets/png/waves.png" alt="waves" class="opacity-20"/>
      <p class="absolute top-1/2 left-1/2 -translate-x-1/2 text-4xl text-white font-vermin">PRODBYMACAZ</p>
    </div>
  `,
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

}
