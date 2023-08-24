import { Component } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  template: `
    <div class="flex flex-row gap-16 justify-center items-center">
      <button class="nav-button">Home</button>
      <button class="nav-button">Beats</button>
      <button class="nav-button">Contact</button>
    </div>
    `,
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {

}
