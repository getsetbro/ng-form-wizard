import { Component, OnInit } from '@angular/core';
import { Observable, of, EMPTY, Subscription } from 'rxjs';
import { NodeService } from './state/node.service';
import { NodeStore } from './state/node.store';
import { NodeQuery } from './state/node.query';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent implements OnInit {
  private subscriptions = new Subscription();

  isLoading$ = this.nodeQuery.selectLoading();
  question$ = this.nodeQuery.selectActive();

  constructor(
    private nodeService: NodeService,
    private nodeQuery: NodeQuery,
  ) {}
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit(): void {
    this.nodeService.get();

    const firstTodo$ = this.nodeQuery.getActive();

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