import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from './state/survey.service';
import { SurveyQuery } from './state/survey-query';
import { Observable } from 'rxjs';
import { Survey } from './state/survey';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  name: string;
  surveys$: Observable<Survey[]>;

  constructor(
    private router: ActivatedRoute,
    private surveyService: SurveyService,
    private surveyQuery: SurveyQuery
    ) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.name = params['name'];
    });

    this.surveyService.get().subscribe();
    this.surveys$ = this.surveyQuery.selectAll();

  }



}
