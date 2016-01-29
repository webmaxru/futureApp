import {Page} from 'ionic/ionic';
import {Inject, provide} from 'angular2/core';

import {DEFAULT_FIREBASE, FirebaseList} from '../../angularfire2/angularfire';

@Page({
  templateUrl: 'build/pages/message-list/message-list.html',
  providers: [
    provide(DEFAULT_FIREBASE, {
      useValue: 'https://futureapp2016.firebaseio.com'
    }),
    FirebaseList('/posts')
  ]
})
export class MessageList {
  constructor(

    @Inject('/posts') public posts: FirebaseObservable<any>) {

  }
}
