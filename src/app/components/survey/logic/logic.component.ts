import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyStore } from '../state/survey.store';

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.scss']
})
export class LogicComponent implements OnInit {
  @Input()
  info: any;
  @Output() next: EventEmitter<any> = new EventEmitter();
  forwardToId: string;

  constructor(
    private router: Router,
    private surveyStore: SurveyStore,
    ) { }

  ngOnInit(): void {
    let that = this;
    this.forwardToId = '';

    this.forwardToId = this.info.forwardToNodeDefault;

    this.surveyStore.updateActiveQ(this.forwardToId );

    setTimeout(function(){

      // console.log(this.pastIds);
      if(that.router.url === "/survey/quiz1"){
        that.router.navigate(['survey/quiz2']);
      }else{
        that.router.navigate(['survey/quiz1']);
      }
    }, 0);
  }
}
