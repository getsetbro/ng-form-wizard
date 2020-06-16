import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState, EntityUIStore } from '@datorama/akita';
import { Survey } from './survey.model';

// export type SuerveyUI = {
//   isOpen: boolean;
//   isLoading: boolean;
//   activeNodeId: string;
// }

export interface SurveyState extends EntityState<Survey>, ActiveState {
  ui: {
    activeQ: string;
  };
}
// export interface SuerveyUIState extends EntityState<SuerveyUI> {}
const initialState = {
  ui: { activeQ: '' }
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'survey' })
export class SurveyStore extends EntityStore<SurveyState> {
  // ui: EntityUIStore<SuerveyUIState>;
  constructor() {
    super(initialState);
  }

  updateActiveQ(nid: string) {
    this.update({ ui: { activeQ:nid } } )
  }

}
