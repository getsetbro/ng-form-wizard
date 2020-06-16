import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Survey } from './survey.model';

export interface SurveyState extends EntityState<Survey> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'survey' })
export class SurveyStore extends EntityStore<SurveyState, Survey> {

  constructor() {
    super();
  }

}
