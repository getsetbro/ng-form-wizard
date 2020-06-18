import { Component, OnInit } from '@angular/core';
import { SurveyService } from './state/survey.service';
import { SurveyQuery } from './state/survey.query';
import { Observable, of, EMPTY, Subscription } from 'rxjs';
import { Survey, Node } from './state/survey.model';
import { SurveyStore } from './state/survey.store';
import { map, take, switchMap, first } from 'rxjs/operators';
import { filterNil, arrayFind, arrayUpdate } from '@datorama/akita';
import { Router, ActivatedRoute } from '@angular/router';
import { NodeService } from './state/node.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent implements OnInit {
  private subscriptions = new Subscription();

  loading$ = false;
  surveys: any;
  survey: any;
  question: any;
  activeQuestionId: string;
  activeEntity$:any;
  constructor(
    private nodeService: NodeService,
  ) {}
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit(): void {
    this.nodeService.get();

    this.loading$ = true;

  }

}


// selectDeviceTelemetry$: Subscription = new Subscription();

// this.selectDeviceTelemetry$.add(
//   this.deviceTelemetryQuery.selectEntity(commonName).pipe(
//     filterNil, // Ignore empty initial observable emitted
//     untilDestroyed(this) // Auto destroys during ngOnDestroy
//    ).subscribe()
// )

// this.selectDeviceTelemetry$.unsubscribe();