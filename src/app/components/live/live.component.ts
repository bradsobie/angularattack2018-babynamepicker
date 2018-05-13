import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit, OnDestroy {
  events: any;
  eventStore: any;
  constructor(
    private userService: UserService,
    private zone: NgZone
  ) {
    this.events = [];
  }

  ngOnInit() {
     this.userService.getUser().then((user) => {
       user.registerForLiveService()
        .then(() => {
          this.eventStore = Kinvey.DataStore.collection('events', Kinvey.DataStoreType.Network);
          this.eventStore.subscribe({
            onMessage: (m) => {
              console.log('onMessage', m);
              this.zone.run(() => {
                this.events = [...this.events, m];
              });
            }
          });
        });
     });
  }

  ngOnDestroy() {
    this.eventStore.unsubscribe();
  }
}
