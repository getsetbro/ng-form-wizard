import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Survey } from './survey.model';
import { SurveyStore } from './survey.store';

@Injectable({ providedIn: 'root' })
export class SurveyService {

  constructor(private surveyStore: SurveyStore, private http: HttpClient) {
  }

  get() {
    return this.http.get<Survey[]>('http://localhost:3000/surveys').pipe(
      tap(entities => this.surveyStore.set(entities))
    );
  }

  // get2() {
  //   return this.http.get<Survey[]>('http://localhost:3000/surveys').pipe(
  //     tap(entities => {this.surveyStore.set(entities);})
  //   );
  // }
  getSurveys() {
    return this.http.get<Survey[]>('http://localhost:3000/surveys').subscribe(entities => {
      this.surveyStore.set(entities);
    });
  }
  
  async getAll() {
    const res = await this.http.get<Survey[]>('http://localhost:3000/surveys').toPromise();
    this.surveyStore.set(res);
  }

  
  // async getData() {
  //   try {
  //     await this.http.get('http://localhost:3000/surveys').toPromise();
  //   } catch (error) {
  //     this.surveyStore.setError(error);
  //   }
  // }
  // add(survey: Survey) {
  //   this.surveyStore.add(survey);
  // }
  // update(id, survey: Partial<Survey>) {
  //   this.surveyStore.update(id, survey);
  // }
  // remove(id: ID) {
  //   this.surveyStore.remove(id);
  // }

}
