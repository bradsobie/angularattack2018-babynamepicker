import { Component } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'select-gender',
  templateUrl: './selectGender.component.html',
  styleUrls: ['./selectGender.component.css']
})
export class SelectGenderComponent {
  constructor(private userService: UserService) {}

  onGenderClicked(gender) {
    this.userService.updateGender(gender).then(() => {
      alert('gender set!');
    });
  }
}
