import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectGenderComponent } from './selectGender.component';
import { SelectGenderButton } from './selectGenderButton.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SelectGenderComponent,
    SelectGenderButton
  ]
})
export class SelectGenderModule { }
