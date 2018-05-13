import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectGenderModule } from './components/selectGender/selectGender.module';
import { NamePickerModule } from './components/namePicker/namePicker.module';
import { RouteContainerModule } from './components/routeContainer/routeContainer.module';
import { LikedNamesModule } from './components/likedNames/likedNames.module';
import { DislikedNamesModule } from './components/dislikedNames/dislikedNames.module';
import { LiveModule } from './components/live/live.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectGenderModule,
    NamePickerModule,
    RouteContainerModule,
    LikedNamesModule,
    DislikedNamesModule,
    LiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
