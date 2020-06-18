import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState, EntityUIStore } from '@datorama/akita';
import { Survey, Node } from './survey.model';
import { produce } from 'immer';
// export type SuerveyUI = {
//   isOpen: boolean;
//   isLoading: boolean;
//   activeNodeId: string;
// }

export interface NodeState extends EntityState<Node>, ActiveState {
  ui: {
    pastNodes: string[],
    surveyObj:{}
  };
}
// export interface SuerveyUIState extends EntityState<SuerveyUI> {}
const initialState = {
  ui: {
    pastNodes: [],
    surveyObj:{}
  }
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'survey', producerFn: produce })
export class SurveyStore extends EntityStore<NodeState> {
  // filter: string;
  // ui: EntityUIStore<SuerveyUIState>;
  constructor() {
    super(initialState);
  }

}
