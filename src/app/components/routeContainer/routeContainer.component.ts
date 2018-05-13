import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'route-container',
  templateUrl: './routeContainer.component.html',
  styleUrls: ['./routeContainer.component.scss']
})
export class RouteContainerComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.router.url === '/user') {
      this.userService.getGender()
        .then((gender) => {
          this.router.navigate(['namepicker'], { relativeTo: this.route });
          return false;
        }).catch(() => {
          this.router.navigate(['selectgender'], { relativeTo: this.route });
          return false;
        });
    }
  }
}
