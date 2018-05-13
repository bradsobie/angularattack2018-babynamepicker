import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  swipeCoord: any;
  swipeTime: any;
  constructor(
    private namesService: NamesService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.onLikeClicked = this.onLikeClicked.bind(this);
    this.onDislikeClicked = this.onDislikeClicked.bind(this);
  }

  ngOnInit() {
    this.userService.getGender().then((gender) => {
      this.gender = gender;
      this.getNames(gender).then(() => {
        this.showNewName();
      });
    }).catch((err) => {
      this.router.navigate(['../selectgender'], { relativeTo: this.route });
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

  swipe(e, when) {
    const coord = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    }

    else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000 &&
          Math.abs(direction[0]) > 30 &&
          Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
        const swipeDirection = direction[0] < 0 ? 'next' : 'previous';
        
        if (swipeDirection === 'next') {
          this.showNewName();
        }
    }
  }
}
