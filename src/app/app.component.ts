import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>
        Welcome to {{title}}!
      </h1>
      <button routerLink="/survey">survey</button>
      <button routerLink="/formsmanager">formsmanager</button>
      <button routerLink="">Home</button>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'fwizapp';
}
