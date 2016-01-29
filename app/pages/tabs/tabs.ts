import {Page} from 'ionic/ionic';

import {TitleList} from '../title-list/title-list';
import {MessageList} from '../message-list/message-list';
import {Messager} from '../messager/messager';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    this.tab1Root = TitleList;
    this.tab2Root = Messager;
    this.tab3Root = MessageList;
  }
}
