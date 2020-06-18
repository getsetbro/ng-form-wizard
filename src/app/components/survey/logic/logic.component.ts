import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyStore } from '../state/survey.store';
import { SurveyService } from '../state/survey.service';

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.scss']
})
export class LogicComponent implements OnInit {
  @Input()
  info: any;
  forwardToId: any;

  constructor(
    private router: Router,
    private surveyService: SurveyService,
    ) { }

  ngOnInit(): void {
    let that = this;
    this.forwardToId = '';
    this.forwardToId = this.info.rules[0].forwardToNode;
    setTimeout(function(){
      // that.surveyService.updateActiveQ(that.forwardToId );
    }, 300);
  }
}
