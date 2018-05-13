import { NgModule } from '@angular/core';

import { ReversePipe } from './components/reverse.pipe';
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
  declarations: [ReversePipe],
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
    BrowserAnimationsModule,
    ReversePipe
  ]
})
export class NgMaterialModule {}
