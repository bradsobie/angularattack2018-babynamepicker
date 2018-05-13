import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectGenderModule } from './components/selectGender/selectGender.module';
import { NamePickerModule } from './components/namePicker/namePicker.module';
import { RouteContainerModule } from './components/routeContainer/routeContainer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectGenderModule,
    NamePickerModule,
    RouteContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
