import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NodeService } from '../state/node.service';
import { NodeStore } from '../state/node.store';

@Component({
  selector: 'app-interstitial',
  templateUrl: './interstitial.component.html',
  styleUrls: ['./interstitial.component.scss']
})
export class InterstitialComponent implements OnInit {
  @Input()
  info: any;

  forwardToId: string;

  constructor(
    private nodeService: NodeService,
    private nodeStore: NodeStore,
    ) { }

  ngOnInit(): void {
    this.forwardToId = '';
    this.forwardToId = this.info.forwardToNode;
    let that = this;
    setTimeout(function(){
      that.nodeStore.setActive(that.forwardToId);
    }, 2000);
  }

}
