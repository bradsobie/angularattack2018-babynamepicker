import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'select-gender',
  templateUrl: './selectGender.component.html',
  styleUrls: ['./selectGender.component.scss']
})
export class SelectGenderComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.onGenderClicked = this.onGenderClicked.bind(this);
  }

  onGenderClicked(gender) {
    this.userService.updateGender(gender).then(() => {
      this.router.navigate(['../namepicker'], { relativeTo: this.route });
    });
  }
}
