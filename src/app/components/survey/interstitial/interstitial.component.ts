import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SurveyStore } from '../state/survey.store';
import { Router } from '@angular/router';
import { SurveyService } from '../state/survey.service';

@Component({
  selector: 'app-interstitial',
  templateUrl: './interstitial.component.html',
  styleUrls: ['./interstitial.component.scss']
})
export class InterstitialComponent implements OnInit {
  @Input()
  info: any;

  forwardToId: string;

  constructor(
    private router: Router,
    private surveyService: SurveyService,
    ) { }

  ngOnInit(): void {
    let that = this;
    this.forwardToId = '';
    this.forwardToId = this.info.forwardToNode;
    setTimeout(function(){
      // that.surveyService.updateActiveQ(that.forwardToId );
    }, 2000);
  }

}
