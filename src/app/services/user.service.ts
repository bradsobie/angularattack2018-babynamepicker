import { Injectable } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

import { KinveyPromiseWrapper } from './kinveyPromiseWrapper.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private kinveyPromiseWrapper: KinveyPromiseWrapper) {}

  initUser() {
    const activeUser = Kinvey.User.getActiveUser();
    if (activeUser) {
      return activeUser.me()
        .then((activeUser: Kinvey.User) => activeUser)
        .catch(() => {
          const logout: any = this.kinveyPromiseWrapper.promise(Kinvey.User.logout());
          return logout.finally(() => {
            return this.kinveyPromiseWrapper.promise(Kinvey.User.signup())
              .then((user: Kinvey.User) => user);
          });
        });
    } else {
      return this.kinveyPromiseWrapper.promise(Kinvey.User.signup())
        .then((user: Kinvey.User) => user);
    }
  }

  updateGender(gender) {
    return this.kinveyPromiseWrapper.promise(Kinvey.User.update({
      data: {
        nameGender: gender
      }
    }));
  }

  getGender() {
    return new Promise((resolve, reject) => {
      const activeUser: any = Kinvey.User.getActiveUser();
      if (activeUser && activeUser.data && activeUser.data.data) {
        return resolve(activeUser.data.data.nameGender);
      }

      return reject('gender not selected');
    });
  }

  getUser() {
    return Promise.resolve(Kinvey.User.getActiveUser());
  }

  updateUser(newData) {
    return this.kinveyPromiseWrapper.promise(Kinvey.User.update(newData));
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

  removeNameFromWhitelist(name) {
    return this.getNameWhitelist().then((whitelist) => {
      const newWhitelist = whitelist.filter((whitelistName) => whitelistName._id !== name._id);
      return this.updateNameWhitelist(newWhitelist);
    });
  }

  removeNameFromBlacklist(name) {
    return this.getNameBlacklist().then((blacklist) => {
      const newBlacklist = blacklist.filter((blacklistName) => blacklistName._id !== name._id);
      return this.updateNameBlacklist(newBlacklist);
    });
  }

  addNameToBlacklist(name) {
    return this.getNameBlacklist().then((blacklist) => {
      const newBlacklist = [...blacklist, name];
      return this.updateNameBlacklist(newBlacklist);
    });
  }
}
