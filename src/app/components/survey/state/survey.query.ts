import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SurveyStore, SurveyState } from './survey.store';
import { Survey } from './survey.model';

@Injectable({ providedIn: 'root' })
export class SurveyQuery extends QueryEntity<SurveyState, Survey> {
  constructor(protected store: SurveyStore) {
    super(store);
  }

}
