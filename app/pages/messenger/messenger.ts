import {Page} from 'ionic/ionic';

import {FirebaseEventPipe} from '../../firebasepipe/firebasepipe';

@Page({
  templateUrl: 'build/pages/messenger/messenger.html',
  pipes: [FirebaseEventPipe]
})
export class Messenger {

  firebaseUrl: string;
  postsRef: Firebase;

  constructor() {
    this.firebaseUrl = "https://futureapp2016.firebaseio.com/posts";
    this.postsRef = new Firebase(this.firebaseUrl);
  };

  onKeyUp($event, nameInput, messageInput) {
    if ($event.which === 13 && messageInput.value) {
      this.pushPost(nameInput.value, messageInput.value);
      messageInput.value = null;
    }
  };

  createPost(nameInput, messageInput) {
    this.pushPost(nameInput.value, messageInput.value);
    messageInput.value = null;
  };

  pushPost(name: string, message: string) {
    this.postsRef.push({
      name: name,
      message: message
    });
  }

}
