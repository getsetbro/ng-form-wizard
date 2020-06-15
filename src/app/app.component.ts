import { Component } from '@angular/core';
import {
  transition,
  trigger,
  state,
  style,
  animate,
  query,
  animateChild,
  group,
} from '@angular/animations';


@Component({
  selector: 'app-root',
  template: `<div class="p-8 m-8">
      <button routerLink="" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Home</button>
      <button routerLink="/survey" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Survey</button>
      <main [@routeAnimation]="o.isActivated ? o.activatedRoute : ''">
        <router-outlet #o="outlet"></router-outlet>
      </main>
    </div>
  `,
  styles: [],
  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [style({ left: '-100%' })]),
        query(':leave', animateChild()),
        group([
          query(':leave', [animate('200ms ease-out', style({ left: '100%' }))]),
          query(':enter', [animate('300ms ease-out', style({ left: '0%' }))])
        ]),
        query(':enter', animateChild()),
      ])
    ]
    )]
})
export class AppComponent {
  title = 'fwizapp';

}
