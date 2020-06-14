import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.scss']
})
export class LogicComponent implements OnInit {
  @Input() info: any;
  @Output() next: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    let that = this;
    setTimeout(function(){
      that.next.emit(null);
    }, 300);
  }

}
