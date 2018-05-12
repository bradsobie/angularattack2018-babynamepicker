import { Injectable } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

@Injectable({
  providedIn: 'root'
})
export class NamesService {
  getNames() {
    const dataStore = Kinvey.DataStore.collection('names');
    const query = new Kinvey.Query();
    query.greaterThanOrEqualTo('count', 150);
    return dataStore.find(query);
  }
}
