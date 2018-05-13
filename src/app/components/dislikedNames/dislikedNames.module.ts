import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from '../../ngMaterial.module';

import { DislikedNamesComponent } from './dislikedNames.component';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  declarations: [
    DislikedNamesComponent
  ]
})
export class DislikedNamesModule { }
