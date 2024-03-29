import { Component, OnInit } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

import { NamesService } from '../../services/names.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'liked-names',
  templateUrl: './likedNames.component.html',
  styleUrls: ['./likedNames.component.scss']
})
export class LikedNamesComponent implements OnInit {
  whitelist: any;
  loading: boolean;
  constructor(
    private namesService: NamesService,
    private userService: UserService
  ) {
    this.onDeleteClicked = this.onDeleteClicked.bind(this);
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getNameWhitelist().then((whitelist) => {
      this.whitelist = whitelist;
      this.loading = false;
    });
  }

  onDeleteClicked(name) {
    this.userService.removeNameFromWhitelist(name)
      .then((newWhitelist) => {
        this.whitelist = newWhitelist;
      });
  }
}
