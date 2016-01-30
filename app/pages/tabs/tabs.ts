import {Page} from 'ionic/ionic';

import {TitleList} from '../title-list/title-list';
import {MessageList} from '../message-list/message-list';
import {Messenger} from '../messenger/messenger';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    this.tab1Root = TitleList;
    this.tab2Root = Messenger;
    this.tab3Root = MessageList;
  }
}
