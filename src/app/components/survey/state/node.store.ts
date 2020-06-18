import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Node } from './node.model';

export interface NodeState extends EntityState<Node>, ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'node' })
export class NodeStore extends EntityStore<NodeState> {

  constructor() {
    super();
  }

}
