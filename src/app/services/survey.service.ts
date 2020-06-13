import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Survey } from '../models/survey';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SurveyService {
  private surveysUrl = 'http://localhost:3000/surveys';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Survey[]>('http://localhost:3000/surveys').pipe(tap(entities => {
      // console.log(entities
      // this.surveyStore.set(entities[0].nodes);
    }));
  }

  /** GET Surveys from the server */
  getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.surveysUrl)
      .pipe(
        tap(_ => this.log('fetched surveys')),
        catchError(this.handleError<Survey[]>('getSurveys', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`HeroService: ${message}`);
  }
}