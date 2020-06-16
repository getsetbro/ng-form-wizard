import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SurveyStore } from '../state/survey.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interstitial',
  templateUrl: './interstitial.component.html',
  styleUrls: ['./interstitial.component.scss']
})
export class InterstitialComponent implements OnInit {
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

    this.forwardToId = this.info.forwardToNode;

    this.surveyStore.updateActiveQ(this.forwardToId );

    setTimeout(function(){

      // console.log(this.pastIds);
      if(that.router.url === "/survey/quiz1"){
        that.router.navigate(['survey/quiz2']);
      }else{
        that.router.navigate(['survey/quiz1']);
      }
    }, 2000);
  }

}
