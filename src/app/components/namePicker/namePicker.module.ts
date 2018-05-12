import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NamePickerComponent } from './namePicker.component';
import { NameCardComponent } from './nameCard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NamePickerComponent,
    NameCardComponent
  ]
})
export class NamePickerModule { }
