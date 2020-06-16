import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { SurveyService } from '../state/survey.service';
import { Observable, Subscription } from 'rxjs';
import { SurveyQuery } from '../state/survey.query';
import { arrayFind, filterNil } from '@datorama/akita';
import { Survey, Node } from '../state/survey.model';
import { tap, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit,OnDestroy {
  private subscriptions = new Subscription();
  // loading$ = this.surveyQuery.selectLoading();
  // node = this.surveyQuery.selectFirst();
  // survey$: any;
  // surveys = this.surveyQuery.selectAll();
  active: Observable<Survey>;
  activeQ$: any;
  activeQ: string;

  node: Observable<Node>;
  nodes$: Observable<Node[]>;
  nodes: Node[];
  selectLoading$: Observable<boolean>;
  loaded = false;
  constructor(
    // private router: ActivatedRoute,
    private surveyService: SurveyService, private surveyQuery: SurveyQuery
  ) { }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit(): void {
      // this.nodes$ = this.surveyQuery.selectAll();
      this.selectLoading$ = this.surveyQuery.selectLoading();
      this.subscriptions.add(
        this.selectLoading$.subscribe(res => {this.goTime(res)})
      )
    }
   
    goTime(res){
      if(!res){
        const activeId = this.surveyQuery.getActive();
        this.nodes$ = this.surveyQuery.selectEntity(activeId.id, 'nodes');
        this.subscriptions.add(
          this.nodes$.subscribe(res => {this.nodes = res;})
        )
        this.activeQ$ = this.surveyQuery.selectActiveQ$;
        this.subscriptions.add(
          this.activeQ$.pipe(filterNil).subscribe(res => {
            this.activeQ = res;
            console.log(this.activeQ);

          })
        )

        this.node = this.surveyQuery.selectEntity(activeId.id, 'nodes').pipe(arrayFind(this.activeQ));
        console.log(this.activeQ);
        this.loaded = true;

      }
    }

}
