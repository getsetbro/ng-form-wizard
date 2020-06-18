import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<section>
  <app-lite-header></app-lite-header>
<main><router-outlet></router-outlet></main>
    </section>
  `,
  styles: [],
})
export class AppComponent {
  title = 'fwizapp';

}
