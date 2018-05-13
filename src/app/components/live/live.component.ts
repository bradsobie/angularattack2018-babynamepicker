import { Component, OnInit, NgZone } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {
  events: any;
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
          const events = Kinvey.DataStore.collection('events', Kinvey.DataStoreType.Network);
          events.subscribe({
            onMessage: (m) => {
              console.log('onMessage', m);
              this.zone.run(() => {
                this.events.push(m);
              });
            }
          });
        })
        .catch(err => {
          // handle error
        });
     });
  }
}
