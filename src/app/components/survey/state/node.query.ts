import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { NodeStore, NodeState } from './node.store';

@Injectable({ providedIn: 'root' })
export class NodeQuery extends QueryEntity<NodeState> {

  constructor(protected store: NodeStore) {
    super(store);
  }

}
