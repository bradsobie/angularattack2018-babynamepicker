import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from '../../ngMaterial.module';

import { AppRoutingModule } from '../../app-routing.module';
import { RouteContainerComponent } from './routeContainer.component';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule,
    AppRoutingModule
  ],
  declarations: [
    RouteContainerComponent
  ]
})
export class RouteContainerModule {}
