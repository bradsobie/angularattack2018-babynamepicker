import { Component, OnInit } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

import { NamesService } from './services/names.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private namesService: NamesService) {}

  ngOnInit() {
    const activeUser = Kinvey.User.getActiveUser();

    if (activeUser) {
      activeUser.me()
        .then((activeUser: Kinvey.User) => {
          this.getNames();
        });
    } else {
      Kinvey.User.signup()
        .then((user: Kinvey.User) => {
          this.getNames();
        });
    }
  }

  getNames() {
    this.namesService.getNames()
      .subscribe((entities: {}[]) => {
          console.log(entities);
        }, (error: Kinvey.BaseError) => {
          console.log(error);
        }, () => {
          console.log('complete');
        });
  }
}
