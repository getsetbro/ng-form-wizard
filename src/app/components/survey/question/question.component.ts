import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { NodeService } from '../state/node.service';
import { NodeStore } from '../state/node.store';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() info: any;
  private subscriptions = new Subscription();
  constructor(
    private nodeService: NodeService,
    private nodeStore: NodeStore,
  ) {}
  ngOnDestroy() {this.subscriptions.unsubscribe();}
  ngOnInit(): void {}
  nodePrev(): void {
    // this.subscriptions.add(
    //   this.lastNodeId$.subscribe(o => {
    //     this.surveyService.updateActiveQ(o);
    //     this.surveyService.removePastNode();
    //   })
    // )
  }
  nodeNext(): void {

    const forwardToNode = this.info.answers[0].forwardToNode;
    if (this.info.nodeType && forwardToNode !== '00000000-0000-0000-0000-000000000000') {
      this.nodeStore.setActive(forwardToNode);
    }else{
      console.log(this.info);
    }

  }
}
