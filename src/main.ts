import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Kinvey } from 'kinvey-angular2-sdk';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const config: Kinvey.ClientConfig = {
  appKey: '<appKey>',
  appSecret: '1b685d17d5a347a68455741e3a5ab3a4'
};

if (environment.production) {
  enableProdMode();
}

Kinvey.init({
  appKey: 'kid_SkMpnRmAz',
  appSecret: '1b685d17d5a347a68455741e3a5ab3a4'
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
