import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Node } from './node.model';
import { NodeStore } from './node.store';
import { Survey } from './survey.model';

@Injectable({ providedIn: 'root' })
export class NodeService {

  constructor(private nodeStore: NodeStore, private http: HttpClient) {
  }

  uri1 = 'http://localhost:3000/surveys';
  uri2 = 'https://ameas-eastus-recommender-dev-apiapp.azurewebsites.net/api/Survey/en_US/76e4592f-3ed5-448e-a31a-6a908e92058b';


  get() {
    return this.http.get<Survey>(this.uri2).pipe(
      tap(entities => {
        // const arr = [entities];
        // this.surveyStore.set(arr, {activeId: arr[0].id});
        this.nodeStore.set(entities.nodes, {activeId: entities.nodes[0].id});
        // this.updateActiveQ(entities);
      })
    ).subscribe();
  }
  
  add(node: Node) {this.nodeStore.add(node);}

  update(id, node: Partial<Node>) {this.nodeStore.update(id, node);}

  remove(id: ID) {this.nodeStore.remove(id);}

}
