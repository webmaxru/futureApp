import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';


@Injectable()
export class TitleData {

  constructor(http: Http) {
    this.http = http;
  }

  loadData() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('data/title-data.json').subscribe(res => {
        this.data = res.json();
        resolve(this.data);
      });
    });
  }

  getTitles(section:string) {
    return this.loadData().then(data => {
      return data[section];
    });
  }

}
