import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { SurveyStore } from './survey-store';
import { Survey } from './survey';

@Injectable({ providedIn: 'root' })
export class SurveyService {

  constructor(private surveyStore: SurveyStore,private http: HttpClient) {}

  get() {
    return this.http.get<Survey[]>('http://localhost:3000/surveys').pipe(tap(entities => {
      // console.log(entities[0].nodes);
      this.surveyStore.set(entities[0].nodes);
    }));
  }

}