import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  template: `
    <div class="font-vermin text-white flex flex-col items-center gap-24">
      <div class="flex flex-row gap-44 items-center">
        <img src="assets/png/profile.png" class="w-32 h-32 rounded-full ml-12"/>
        <p class="text-5xl w-96">Let's Make Music</p>
      </div>
      <div class="flex flex-col gap-5">
        <p class="text-lg w-[600px] text-justify">For general inquiries, custom beats, collabs or curiosities, please shoot me a message. Always open and curious to see what we can do together 🔥</p>
        <div class="flex flex-row gap-2 items-center">
          <img src="assets/png/email-closed.png" class="w-8 h-5"/>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTfQGmChSCKwZFVnDLJrGfnFJfrQtQDTRDqdXGjdjswfjrxgCMQbfhDPpxnPfZxxlJzgV" target="_blank" class="text-magenta opacity-50 text-lg">prodbymacaz@gmail.com</a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

}
