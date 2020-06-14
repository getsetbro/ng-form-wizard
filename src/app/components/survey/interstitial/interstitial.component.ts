import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-interstitial',
  templateUrl: './interstitial.component.html',
  styleUrls: ['./interstitial.component.scss']
})
export class InterstitialComponent implements OnInit {
  @Input()
  info: any;
  @Output() next: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    let that = this;
    setTimeout(function(){
      that.next.emit(null);
    }, 2000);
  }
}
