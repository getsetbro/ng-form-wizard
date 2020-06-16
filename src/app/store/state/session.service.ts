import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Session } from './session.model';
import { SessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionService {

  constructor(private sessionStore: SessionStore, private http: HttpClient) { }

  async updateUserName0(newName: string) {
    this.sessionStore.setLoading(true);
    // await this.http(...).toPromise();
    this.sessionStore.update({ name: newName });
    this.sessionStore.setLoading(false);
  }
  async updateUserName1(newName: string) {
    try {
      // await this.http(...).toPromise();
    } catch(error) {
      this.sessionStore.setError(error);
    }
  }  
  updateUserName2(newName: string) {
    this.sessionStore.update({ name: newName });
  }
  updateUserName3(newName: string) {
    this.sessionStore.update(state => ({
      name: newName
    }));
  }
  // get() {
  //   return this.http.get<Session[]>('https://api.com').pipe(tap(entities => {
  //     this.sessionStore.set(entities);
  //   }));
  // }

  add(session: Session) {
    this.sessionStore.add(session);
  }

  update(id, session: Partial<Session>) {
    this.sessionStore.update(id, session);
  }

  remove(id: ID) {
    this.sessionStore.remove(id);
  }



}
