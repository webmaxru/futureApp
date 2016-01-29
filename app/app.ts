import {App, Platform} from 'ionic/ionic';

import {TabsPage} from './pages/tabs/tabs';
import {TitleData} from './providers/title-data';

import {enableProdMode} from 'angular2/core';
enableProdMode();

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [TitleData],
  config: {
    iconMode: 'md'
  }
})
export class FutureApp {

  constructor(platform: Platform, titleData: TitleData) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      titleData.loadData();
    });
  }

}
