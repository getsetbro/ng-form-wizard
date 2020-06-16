import { Injectable } from '@angular/core';
import { QueryEntity, EntityUIQuery } from '@datorama/akita';
import { SurveyStore, SurveyState } from './survey.store';
import { Survey } from './survey.model';

@Injectable({ providedIn: 'root' })
export class SurveyQuery extends QueryEntity<SurveyState, Survey> {
  // ui: EntityUIQuery<SuerveyUIState>;
  selectActiveQ$ = this.select(state => state.ui.activeQ);
  constructor(protected store: SurveyStore) {
    super(store);
    // this.createUIQuery();
  }

}
