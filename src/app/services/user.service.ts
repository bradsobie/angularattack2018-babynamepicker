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
    return new Promise((resolve, reject) => {
      return Kinvey.User.update({
        data: {
          nameGender: gender
        }
      })
      .then(() => resolve())
      .catch((err) => reject(err));
    });
  }

  getGender() {
    const activeUser: any = Kinvey.User.getActiveUser();

    if (activeUser && activeUser.data && activeUser.data.data) {
      return Promise.resolve(activeUser.data.data.nameGender);
    }

    return Promise.reject('gender not selected');
  }

  getUser() {
    return Promise.resolve(Kinvey.User.getActiveUser());
  }

  updateUser(newData) {
    return new Promise((resolve, reject) => {
      return Kinvey.User.update(newData)
      .then((updatedUser) => resolve(updatedUser))
      .catch((err) => reject(err));
    });
  }

  getNameWhitelist() {
    const activeUser: any = Kinvey.User.getActiveUser();

    if (activeUser &&
        activeUser.data &&
        activeUser.data.data &&
        activeUser.data.data.nameWhitelist
    ) {
      return Promise.resolve(activeUser.data.data.nameWhitelist);
    } else {
      return Promise.resolve([]);
    }
  }

  updateNameWhitelist(whitelist) {
    const activeUser: any = Kinvey.User.getActiveUser();
    return this.updateUser({
      data: {
        ...activeUser.data.data,
        nameWhitelist: whitelist
      }
    }).then(() => whitelist);
  }

  getNameBlacklist() {
    const activeUser: any = Kinvey.User.getActiveUser();

    if (activeUser &&
        activeUser.data &&
        activeUser.data.data &&
        activeUser.data.data.nameBlacklist
    ) {
      return Promise.resolve(activeUser.data.data.nameBlacklist);
    } else {
      return Promise.resolve([]);
    }
  }

  updateNameBlacklist(blacklist) {
    const activeUser: any = Kinvey.User.getActiveUser();
    return this.updateUser({
      data: {
        ...activeUser.data.data,
        nameBlacklist: blacklist
      }
    }).then(() => blacklist);
  }

  addNameToWhitelist(name) {
    return this.getNameWhitelist().then((whitelist) => {
      const newWhitelist = [...whitelist, name];
      return this.updateNameWhitelist(newWhitelist);
    });
  }

  addNameToBlacklist(name) {
    return this.getNameBlacklist().then((blacklist) => {
      const newBlacklist = [...blacklist, name];
      return this.updateNameBlacklist(newBlacklist);
    });
  }
}
