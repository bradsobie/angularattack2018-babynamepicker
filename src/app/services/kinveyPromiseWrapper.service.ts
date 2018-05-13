import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KinveyPromiseWrapper {
  promise(kinveyPromise) {
    return new Promise((resolve, reject) => {
      return kinveyPromise
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    });
  }
}
