import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { NodeService } from '../state/node.service';
import { NodeStore } from '../state/node.store';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent implements OnInit {
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
