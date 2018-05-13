import { Injectable } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

import { KinveyPromiseWrapper } from './kinveyPromiseWrapper.service';

@Injectable({
  providedIn: 'root'
})
export class NamesService {
  names: any;
  constructor(private kinveyPromiseWrapper: KinveyPromiseWrapper) {
    this.names = {};
  }

  getNames(gender, blacklist) {
    if (this.names[gender] && this.names[gender].length > 0) {
      return Promise.resolve(this.names[gender]);
    }
    const dataStore = Kinvey.DataStore.collection('names');
    const query = new Kinvey.Query();
    query.greaterThanOrEqualTo('count', 500);

    if (gender) {
      query.equalTo('gender', gender);
    }

    return this.kinveyPromiseWrapper.promise(dataStore.find(query).toPromise()).then((names: any) => {
      const filteredNames = this.getFilteredNames(names, blacklist);
      this.names[gender] = filteredNames;
      return filteredNames;
    });
  }

  getFilteredNames(names, blacklist) {
    return names.filter((name) => {
      let shouldInclude = true;
      blacklist.forEach((blacklistedName) => {
        if (name._id === blacklistedName._id) {
           shouldInclude = false;
        }
      });
      return shouldInclude;
    });
  }
}
