import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NamePickerComponent } from './namePicker.component';
import { NameCardComponent } from './nameCard.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  declarations: [
    NamePickerComponent,
    NameCardComponent
  ]
})
export class NamePickerModule { }
