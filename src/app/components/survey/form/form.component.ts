import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { filterNil } from '@datorama/akita';
import { NodeService } from '../state/node.service';
import { NodeStore } from '../state/node.store';
import { NodeQuery } from '../state/node.query';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  @Input() info: any;
  private subscriptions = new Subscription();

  constructor(
    private nodeService: NodeService,
    private nodeStore: NodeStore,
    private nodeQuery: NodeQuery,
  ) {}
  ngOnDestroy() {this.subscriptions.unsubscribe();}
  ngOnInit(): void {}
  nodePrev(): void {
    // this.subscriptions.add(

    
    // )
  }
  nodeNext(): void {

      const forwardToNode = this.info.submit.forwardToNode;
      if (this.info.nodeType && forwardToNode !== '00000000-0000-0000-0000-000000000000') {
        this.nodeStore.setActive(forwardToNode);
      }else{
        console.log(this.info);
      }

  }
}
