import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SurveyService } from '../state/survey.service';
import { SurveyQuery } from '../state/survey.query';
import { filterNil } from '@datorama/akita';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent implements OnInit {
  @Input() info: any;
  private subscriptions = new Subscription();
  lastNodeId$ = this.surveyQuery.selectLastNodeId$;
  constructor(
    private surveyService: SurveyService,
    private surveyQuery: SurveyQuery
  ) {}
  ngOnDestroy() {this.subscriptions.unsubscribe();}
  ngOnInit(): void {}
  nodePrev(): void {
    // this.subscriptions.add(
    //   this.lastNodeId$.subscribe(o => {
    //     this.surveyService.updateActiveQ(o);
    //     this.surveyService.removePastNode();
    //   })
    // )
  }
  nodeNext(): void {

    this.info.subscribe(obj => {
      const forwardToNode = obj.submit.forwardToNode;
      if (obj && obj.nodeType && forwardToNode !== '00000000-0000-0000-0000-000000000000') {
        // this.surveyService.addPastNode(obj.id);
        // this.surveyService.updateActiveQ(forwardToNode);
      }else{
        console.log(obj);
      }
    })

  }
}
