import { Component, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'route-container',
  template: 'test'
})
export class RouteContainerComponent {
  constructor() {}
}

@Injectable()
export class RootRouteGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canActivate() {
    return this.userService.getGender()
      .then((gender) => {
        this.router.navigate(['namepicker']);
        return false;
      }).catch(() => {
        this.router.navigate(['selectgender']);
        return false;
      });
  }
}
