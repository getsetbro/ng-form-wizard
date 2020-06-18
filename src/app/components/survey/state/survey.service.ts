import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Survey } from './survey.model';
import { SurveyStore } from './survey.store';

@Injectable({ providedIn: 'root' })
export class SurveyService {

  constructor(
    private surveyStore: SurveyStore,
    private http: HttpClient
  ) {}

  uri1 = 'http://localhost:3000/surveys';
  uri2 = 'https://ameas-eastus-recommender-dev-apiapp.azurewebsites.net/api/Survey/en_US/76e4592f-3ed5-448e-a31a-6a908e92058b';


  getSurveys() {
    return this.http.get<Survey>(this.uri2).pipe(
      tap(entities => {
        // const arr = [entities];
        // this.surveyStore.set(arr, {activeId: arr[0].id});
        this.surveyStore.set(entities.nodes, {activeId: entities.nodes[0].id});
        // this.updateActiveQ(entities);
      })
    ).subscribe();
  }

  // updateActiveQ(obj: Survey) {
  //   this.surveyStore.update(state => {
  //     state.ui.surveyObj = obj;
  //   })
  // }

}
