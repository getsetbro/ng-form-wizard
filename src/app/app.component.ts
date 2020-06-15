import { Component } from '@angular/core';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  template: `<div class="p-8 m-8">
    <button routerLink="/home" routerLinkActive="active" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Home</button>
    <button routerLink="/survey" routerLinkActive="active" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Survey</button>
    <main [@routerTransition]="getState(o)">
      <router-outlet #o="outlet"></router-outlet>
    </main>
    </div>
  `,
  styles: [],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'fwizapp';
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
