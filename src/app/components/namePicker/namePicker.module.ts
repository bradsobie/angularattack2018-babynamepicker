import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from '../../ngMaterial.module';

import { NamePickerComponent } from './namePicker.component';
import { NameCardComponent } from './nameCard.component';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  declarations: [
    NamePickerComponent,
    NameCardComponent
  ]
})
export class NamePickerModule { }
