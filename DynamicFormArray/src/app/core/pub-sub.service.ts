import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { SelectState } from '../shared/pubsub/models';


@Injectable()
export class PubSubService {

  public formSelectPublisher = new BehaviorSubject<SelectState>(new SelectState());

  constructor() { }

  publishSelect(state: SelectState) {
    this.formSelectPublisher.next(state);
  }

  getSelect(): Observable<SelectState> {
    return this.formSelectPublisher.asObservable();
  }

}
