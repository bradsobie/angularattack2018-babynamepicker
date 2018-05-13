import { Component, OnInit } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

import { NamesService } from '../../services/names.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'disliked-names',
  templateUrl: './dislikedNames.component.html',
  styleUrls: ['./dislikedNames.component.scss']
})
export class DislikedNamesComponent implements OnInit {
  blacklist: any;
  constructor(
    private namesService: NamesService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getNameBlacklist().then((blacklist) => {
      this.blacklist = blacklist;
    });
  }
}
