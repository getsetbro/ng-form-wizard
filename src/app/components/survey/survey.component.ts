import { Component, OnInit } from '@angular/core';
import { routerTransition } from './router.animations';
import { SurveyService } from './state/survey.service';
import { SurveyQuery } from './state/survey.query';
import { Observable, of, EMPTY, Subscription } from 'rxjs';
import { Survey, Node } from './state/survey.model';
import { SurveyStore } from './state/survey.store';
import { map, take, switchMap } from 'rxjs/operators';
import { filterNil, arrayFind, arrayUpdate } from '@datorama/akita';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  animations: [routerTransition]
})
export class SurveyComponent implements OnInit {
  private subscriptions = new Subscription();
  activeSurveyId: string;

  getState() {
    return (this.router.url === "/survey/quiz1") ? 'quiz1' : 'quiz2';
  }

  // surveys:any;
  // loading$ = this.surveyQuery.selectLoading();
  // name: string;
  node: Node;
  nodes$: Observable<Node[]>;
  nodes: Node[];
  forwardToId:string;
  loaded = false;
  pastIds = [];
  firstSurvey: Observable<Survey>;
  selectLoading$: Observable<boolean>;

  // surveys = this.surveyQuery.selectFirst().subscribe(obj => obj);
  constructor(
    private router: Router,
    // private route:ActivatedRoute,
    private surveyService: SurveyService,
    private surveyStore: SurveyStore,
    private surveyQuery: SurveyQuery
  ) {
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit(): void {

    this.surveyService.getSurveys();

    this.selectLoading$ = this.surveyQuery.selectLoading();
    this.selectLoading$.subscribe(res => {
      if(!res){
        this.firstSurvey = this.surveyQuery.selectFirst();//.pipe(switchMap(value => value !== undefined ? of(value) : EMPTY))
        this.firstSurvey.subscribe(obj => {
          this.activeSurveyId = obj.id;
          this.surveyStore.setActive(obj.id);
          this.nodes$ = this.surveyQuery.selectEntity(obj.id, 'nodes');
          this.nodes$.subscribe(res => {
            this.nodes = res;
          });
          // this.nodes = this.surveyQuery.selectEntity(obj.id, ({ nodes }) => nodes);
          this.nodes$.pipe(arrayFind(obj.nodeRootId)).subscribe(obj =>{
            this.node = obj;
          })
          this.surveyStore.updateActiveQ(obj.nodeRootId);

        })

        this.loaded = true;
      }
    })
    // this.nodes = this.surveyQuery.selectFirst();
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
      // this.surveyStore.update(this.activeSurveyId, ({ nodes }) => ({
      //   nodes: arrayUpdate(nodes, this.forwardToId, { active: true })
      // }));
      this.surveyStore.updateActiveQ(this.forwardToId );
      this.node = nextNode;
      // console.log(this.pastIds);
      if(this.router.url === "/survey/quiz1"){
        this.router.navigate(['survey/quiz2']);
      }else{
        this.router.navigate(['survey/quiz1']);
      }

    }else{
      console.log(nextNode);
    }

  }
  
  nodePrev(): void {

    const pastId = this.pastIds[this.pastIds.length-1];
    this.surveyStore.updateActiveQ(pastId );
    if(this.router.url === "/survey/quiz1"){
      this.router.navigate(['survey/quiz2']);
    }else{
      this.router.navigate(['survey/quiz1']);
    }
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