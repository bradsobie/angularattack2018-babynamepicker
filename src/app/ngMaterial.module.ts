import { NgModule } from '@angular/core';

import {
  MatListModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatSidenavModule,
  MatBadgeModule,
  MatCardModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatBadgeModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatBadgeModule,
    MatCardModule,
    BrowserAnimationsModule
  ]
})
export class NgMaterialModule {}
