import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'select-gender',
  templateUrl: './selectGender.component.html',
  styleUrls: ['./selectGender.component.css']
})
export class SelectGenderComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  onGenderClicked(gender) {
    this.userService.updateGender(gender).then(() => {
      this.router.navigateByUrl('/namepicker');
    });
  }
}
