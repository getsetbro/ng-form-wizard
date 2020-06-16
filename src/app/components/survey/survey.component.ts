import { Component, OnInit } from '@angular/core';
import { routerTransition } from './router.animations';
import { SurveyService } from './state/survey.service';
import { SurveyQuery } from './state/survey.query';
import { Observable, of, EMPTY } from 'rxjs';
import { Survey } from './state/survey.model';
import { SurveyStore } from './state/survey.store';
import { map, take, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  animations: [routerTransition]
})
export class SurveyComponent implements OnInit {
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  // surveys:any;
  // loading$ = this.surveyQuery.selectLoading();
  // name: string;
  node:any;
  nodes = [];
  forwardToId:'';
  loaded = false;
  pastIds = [];
  firstSurvey: Observable<Survey>;
  surveys = this.surveyQuery.selectFirst().subscribe(obj => obj);
  constructor(
    // private router: ActivatedRoute,
    private surveyService: SurveyService,
    private surveyStore: SurveyStore,
    private surveyQuery: SurveyQuery
  ) { }

  ngOnInit(): void {

    this.surveyService.getSurveys();
    // this.surveys = this.surveyQuery.selectAll();
    // this.surveys.pipe(observable => {
    //   console.log(observable);
    //   return observable
    // }).subscribe(
    //   res => {
    //     // console.log(res);
    //     // this.nodes = res[0].nodes;
    //     // this.node = res[0].nodes[0];
    //     this.loaded = true;
    //   }
    // );
    this.firstSurvey = this.surveyQuery.selectFirst()//.pipe(switchMap(value => value !== undefined ? of(value) : EMPTY))

  }

  nodeNext(ev): void {

    this.forwardToId = '';

    if(this.node.nodeType === "Form"){
      this.forwardToId = this.node.submit.forwardToNode;
      this.pastIds.push(this.node.id);

    }
    if(this.node.nodeType === "Interstitial"){
      this.forwardToId = this.node.forwardToNode;
    }
    if(this.node.nodeType === "Question"){
      this.forwardToId = this.node.answers[0].forwardToNode;
      this.pastIds.push(this.node.id);

    }
    if(this.node.nodeType === "MultipleChoice"){
      this.forwardToId = this.node.submit.forwardToNode;
      this.pastIds.push(this.node.id);

    }
    if(this.node.nodeType === "Logic"){
      this.forwardToId = this.node.forwardToNodeDefault;
    }

    let nextNode = this.nodes.find(node => {
      return node.id === this.forwardToId;
    })

    if(nextNode && nextNode.nodeType){
      this.node = nextNode;
      console.log(this.pastIds);
    }else{
      console.log(nextNode);
    }

  }
  
  nodePrev(): void {

    const pastId = this.pastIds[this.pastIds.length-1];
    let prevNode = this.nodes.find(node => {
      return node.id === pastId;
    })

    if(prevNode && prevNode.nodeType){
      this.node = prevNode;
      this.pastIds.pop();
    }else{
      console.log(prevNode);
    }

  }
}


// selectDeviceTelemetry$: Subscription = new Subscription();

// this.selectDeviceTelemetry$.add(
//   this.deviceTelemetryQuery.selectEntity(commonName).pipe(
//     filterNil, // Ignore empty initial observable emitted
//     untilDestroyed(this) // Auto destroys during ngOnDestroy
//    ).subscribe()
// )

// this.selectDeviceTelemetry$.unsubscribe();