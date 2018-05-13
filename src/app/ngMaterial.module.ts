import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatBadgeModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatBadgeModule,
    BrowserAnimationsModule
  ]
})
export class NgMaterialModule {}
