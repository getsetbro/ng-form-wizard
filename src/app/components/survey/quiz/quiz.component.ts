import { Component, Input, OnInit } from '@angular/core';
import { SurveyService } from '../state/survey.service';
import { Observable } from 'rxjs';
import { SurveyQuery } from '../state/survey.query';
import { arrayFind } from '@datorama/akita';
import { Survey } from '../state/survey.model';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  // loading$ = this.surveyQuery.selectLoading();
  // node = this.surveyQuery.selectFirst();
  // survey$: any;
  // surveys = this.surveyQuery.selectAll();
  active: any;
  nodes: any;
  constructor(
    // private router: ActivatedRoute,
    private surveyService: SurveyService, private surveyQuery: SurveyQuery
  ) { }

  ngOnInit(): void {
    // this.router.queryParams.subscribe(params => {this.name = params['name'];});
    // this.loading$ = this.surveyQuery.selectLoading();
    // this.node = this.surveyQuery.getAlll()
    // this.surveyService.get().subscribe();
    // this.node = this.surveyQuery.getCount();
    // this.node = this.surveyQuery.select();
    // this.node = this.surveyQuery.selectFirst();
    // this.node = this.surveys$[0];
    // if (this.surveyQuery.hasActive()) {
    //   this.active = this.surveyQuery.selectActive();
    //   this.nodes = this.surveyQuery.selectActive(({ nodes }) => nodes);
    // }
    this.nodes = this.surveyQuery.selectFirst().pipe(map(value => value.nodes))

  }

}
