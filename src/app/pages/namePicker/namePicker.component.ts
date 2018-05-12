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
  constructor(
    private namesService: NamesService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getGender().then((gender) => {
      this.getNames(gender).then(() => {
        this.showNewName();
      });
    });
  }

  showNewName() {
    const randomNameIndex = this.getRandomNumber(0, this.names.length);
    console.log(this.names[randomNameIndex].name);
  }


  getNames(gender) {
    return this.namesService.getNames(gender)
      .toPromise()
      .then((names: any) => {
        return this.names = names;
      });
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
