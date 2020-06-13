import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Survey } from './survey';

export interface SurveyState extends EntityState<Survey> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'surveys' })
export class SurveyStore extends EntityStore<SurveyState> {
    constructor() {
        super();
    }
}