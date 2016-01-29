import {Page} from 'ionic/ionic';
import {TitleData} from '../../providers/title-data';

@Page({
  templateUrl: 'build/pages/title-list/title-list.html'
})
export class TitleList {

  section: string;

  constructor(titleData: TitleData) {
    this.titleData = titleData;
    this.section = "contributions"
    this.updateTitles();
  }

  updateTitles() {
    this.titleData.getTitles(this.section).then(data => {
      this.titles = data;
    });
  }

}
