import { Component, OnInit } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

import { NamesService } from '../../services/names.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'name-picker',
  templateUrl: './namePicker.component.html',
  styleUrls: ['./namePicker.component.scss']
})
export class NamePickerComponent implements OnInit {
  names: any;
  currentName: any;
  gender: any;
  whitelist: any;
  blacklist: any;
  constructor(
    private namesService: NamesService,
    private userService: UserService
  ) {
    this.onLikeClicked = this.onLikeClicked.bind(this);
    this.onDislikeClicked = this.onDislikeClicked.bind(this);
  }

  ngOnInit() {
    Promise.all([
      this.userService.getGender(),
      this.userService.getNameBlacklist(),
      this.userService.getNameWhitelist()
    ]).then(([gender, blacklist, whitelist]) => {
      this.gender = gender;
      this.blacklist = blacklist;
      this.whitelist = whitelist;
      this.getNames(gender).then(() => {
        this.showNewName();
      });
    });
  }

  showNewName() {
    const randomNameIndex = this.getRandomNumber(0, this.names.length);
    this.currentName = this.names[randomNameIndex];
  }

  getNames(gender) {
    return this.namesService.getNames(gender)
      .then((names: any) => {
        return this.names = names;
      });
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onLikeClicked() {
    this.userService.addNameToWhitelist(this.currentName)
      .then((newWhitelist) => {
        this.whitelist = newWhitelist;
        this.showNewName()
      });
  }

  onDislikeClicked() {
    this.userService.addNameToBlacklist(this.currentName)
      .then((newBlacklist) => {
        this.blacklist = newBlacklist;
        this.showNewName()
      });
  }
}
