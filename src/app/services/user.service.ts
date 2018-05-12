import { Injectable } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  initUser() {
    const activeUser = Kinvey.User.getActiveUser();

    if (activeUser) {
      return activeUser.me()
        .then((activeUser: Kinvey.User) => activeUser);
    } else {
      return Kinvey.User.signup()
        .then((user: Kinvey.User) => user);
    }
  }

  updateGender(gender) {
    return Kinvey.User.update({
      data: {
        nameGender: gender
      }
    });
  }

  getUser() {
    return Promise.resolve(Kinvey.User.getActiveUser());
  }
}
