import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <div class="relative">
      <img src="/assets/png/waves.png" alt="waves" class="opacity-20 w-[100vw]"/>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 text-4xl text-white font-vermin flex flex-col gap-2">
        <div class="flex flex-row gap-2">
          <p>@PRODBY</p>
          <div class="flex flex-row gap-1 h-[50px]">
            <div class="eq-bar animate-scaleTypeOne"></div>
            <div class="eq-bar animate-scaleTypeTwo"></div>
            <div class="eq-bar animate-scaleTypeThree"></div>
          </div>
          <p>ACAZ</p>
        </div>
        <div class="flex flex-row gap-6 self-center">
          <a href="https://instagram.com/prodbymacaz" target="_blank"><img src="/assets/png/instagram.png" class="w-6 h-6"></a>
          <a href="https://www.youtube.com/channel/UC_UkHGUoqs46T_TAm8Yxa9g" target="_blank"><img src="/assets/png/youtube.png" class="w-8 h-6"/></a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent{
}
