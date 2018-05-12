import { Component, OnInit } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

import { NamesService } from '../../services/names.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'name-picker',
  templateUrl: './namePicker.component.html',
  styleUrls: ['./namePicker.component.css']
})
export class NamePickerComponent implements OnInit {
  names: any;
  currentName: any;
  constructor(
    private namesService: NamesService,
    private userService: UserService
  ) {
    this.onLikeClicked = this.onLikeClicked.bind(this);
    this.onDislikeClicked = this.onDislikeClicked.bind(this);
  }

  ngOnInit() {
    this.userService.getGender().then((gender) => {
      this.getNames(gender).then(() => {
        this.showNewName();
      });
    });
  }

  showNewName() {
    const randomNameIndex = this.getRandomNumber(0, this.names.length);
    this.currentName = this.names[randomNameIndex];
    console.log(randomNameIndex, this.currentName);
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
    this.showNewName();
  }

  onDislikeClicked() {
    this.showNewName();
  }
}
