import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'route-container',
  templateUrl: './routeContainer.component.html',
  styleUrls: ['./routeContainer.component.scss']
})
export class RouteContainerComponent implements OnInit, OnDestroy {
  mobileQueryListener: any;
  mobileQuery: MediaQueryList;
  opened: boolean;
  gender: any;
  isBoyTheme: boolean;
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    this.opened = false;

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.userService.getGender()
          .then((gender) => {
            this.gender = gender;
            this.isBoyTheme = gender === 'M';
            this.userService.setThemeColor(gender);
          });
      }

      if (this.mobileQuery.matches) {
        this.opened = false;
      }
    });
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

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

  onToggleClicked() {
    this.opened = !this.opened;
  }
}
