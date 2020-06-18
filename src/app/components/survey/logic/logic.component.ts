import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NodeService } from '../state/node.service';
import { NodeStore } from '../state/node.store';

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.scss']
})
export class LogicComponent implements OnInit {
  @Input()
  info: any;
  forwardToId: any;

  constructor(
    private nodeService: NodeService,
    private nodeStore: NodeStore,
    ) { }

  ngOnInit(): void {
    this.forwardToId = '';
    this.forwardToId = this.info.rules[0].forwardToNode;
    let that = this;
    setTimeout(function(){
      that.nodeStore.setActive(that.forwardToId);
    }, 300);
  }
}
