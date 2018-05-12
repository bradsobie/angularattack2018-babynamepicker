import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

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
export class AppModule {
  constructor() {
    const activeUser = Kinvey.User.getActiveUser();

    if (activeUser) {
      activeUser.me()
        .then((activeUser: Kinvey.User) => {
          this.getData();
        });
    } else {
      Kinvey.User.signup()
        .then((user: Kinvey.User) => {
          this.getData();
        });
    }
  }

  getData() {
    const dataStore = Kinvey.DataStore.collection('names');
    const query = new Kinvey.Query();
    query.greaterThanOrEqualTo('count', 100);

    dataStore.find(query)
      .subscribe((entities: {}[]) => {
        console.log(entities);
      }, (error: Kinvey.BaseError) => {
        console.log(error);
      }, () => {
        console.log('complete');
      });
  }
}
