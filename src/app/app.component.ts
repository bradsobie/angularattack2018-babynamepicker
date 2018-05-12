import { Component, OnInit } from '@angular/core';

import { NamesService } from './services/names.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private namesService: NamesService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.initUser().then(() => {
      this.getNames();
    });
  }

  getNames() {
    this.namesService.getNames('M')
      .subscribe((entities: {}[]) => {
          console.log(entities);
        }, (error) => {
          console.log(error);
        }, () => {
          console.log('complete');
        });
  }
}
