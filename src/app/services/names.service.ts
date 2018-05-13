import { Injectable } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

import { KinveyPromiseWrapper } from './kinveyPromiseWrapper.service';

@Injectable({
  providedIn: 'root'
})
export class NamesService {
  constructor(private kinveyPromiseWrapper: KinveyPromiseWrapper) {}

  getNames(gender) {
    const dataStore = Kinvey.DataStore.collection('names');
    const query = new Kinvey.Query();
    query.greaterThanOrEqualTo('count', 200);

    if (gender) {
      query.equalTo('gender', gender);
    }

    return this.kinveyPromiseWrapper.promise(dataStore.find(query).toPromise());
  }
}
