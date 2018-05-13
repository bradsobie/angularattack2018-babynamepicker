import { Injectable } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor() {}
  sendEvent(name, action) {
    const dataStore = Kinvey.DataStore.collection('events');
    return dataStore.save({
      name,
      action
    });
  }
}
