import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from '../../ngMaterial.module';

import { LikedNamesComponent } from './likedNames.component';
import { DeleteButtonModule } from '../deleteButton/deleteButton.module';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule,
    DeleteButtonModule
  ],
  declarations: [
    LikedNamesComponent
  ]
})
export class LikedNamesModule { }
