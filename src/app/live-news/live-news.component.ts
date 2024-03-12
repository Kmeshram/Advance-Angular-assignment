import { Component, ElementRef, ViewChild } from '@angular/core';
import { BulletinService } from '../bulletin.service';
import { CommonModule } from '@angular/common';
import { FormatDatePipe } from '../format-date.pipe';

@Component({
  selector: 'app-live-news',
  standalone: true,
  imports: [CommonModule, FormatDatePipe],
  templateUrl: './live-news.component.html',
  styleUrl: './live-news.component.scss'
})
export class LiveNewsComponent {
  bulletinList: any[] = [];

  currentIndex = 0
  constructor(private bs: BulletinService) { }

  ngOnInit(): void {
    this.bulletinList = this.bs.getBulletinList();
    this.cyclingtheList()
 }

cyclingtheList() {
    setTimeout(() => {
      if (this.currentIndex < this.bulletinList.length - 1) {
        this.currentIndex++
        this.cyclingtheList()
      }
    }, 5000);
  }
}

