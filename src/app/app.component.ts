import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="p-8 m-8">
    <button routerLink="/home" routerLinkActive="active" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Home</button>
    <button routerLink="/survey/quiz" routerLinkActive="active" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Survey</button>
    <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'fwizapp';

}
