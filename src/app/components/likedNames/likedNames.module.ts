import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from '../../ngMaterial.module';

import { LikedNamesComponent } from './likedNames.component';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  declarations: [
    LikedNamesComponent
  ]
})
export class LikedNamesModule { }
