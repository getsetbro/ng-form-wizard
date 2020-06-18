import { Injectable } from '@angular/core';
import { QueryEntity, arrayFind } from '@datorama/akita';
import { SurveyStore, NodeState } from './survey.store';
import { Survey, Node } from './survey.model';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SurveyQuery extends QueryEntity<NodeState, Node> {
  // ui: EntityUIQuery<SuerveyUIState>;

  // selectPastNodes$ = this.select(state => state.ui.pastNodes);
  // selectLastNodeId$ = this.select(state => state.ui.pastNodes[state.ui.pastNodes.length -1]);

  constructor(protected store: SurveyStore) {
    super(store);
    // this.createUIQuery();
  }

}
