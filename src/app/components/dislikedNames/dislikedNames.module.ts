import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from '../../ngMaterial.module';

import { DislikedNamesComponent } from './dislikedNames.component';
import { DeleteButtonModule } from '../deleteButton/deleteButton.module';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule,
    DeleteButtonModule
  ],
  declarations: [
    DislikedNamesComponent
  ]
})
export class DislikedNamesModule { }
