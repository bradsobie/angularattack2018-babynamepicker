import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SelectGenderModule } from './pages/selectGender/selectGender.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectGenderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
