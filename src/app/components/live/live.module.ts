import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from '../../ngMaterial.module';

import { LiveComponent } from './live.component';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  declarations: [
    LiveComponent
  ]
})
export class LiveModule { }
