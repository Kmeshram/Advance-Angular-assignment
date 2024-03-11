import { Injectable } from '@angular/core';
import { Bulletin } from './bulletin';

@Injectable({
  providedIn: 'root'
})
export class BulletinService {

  date = new Date()


  public getBulletinList() {
    let bulletinList: Bulletin[];

    bulletinList = [
      new Bulletin("News One", this.date),
      new Bulletin("News Two", this.date),
      new Bulletin("News Three", this.date)
    ];

    return bulletinList;
  }
}
