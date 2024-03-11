import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Bulletin } from '../bulletin';
import { CommonModule } from '@angular/common';
import { WraptextPipe } from '../wraptext.pipe';
import { FormatDatePipe } from '../format-date.pipe';
import { OnhovertextcolorDirective } from '../onhovertextcolor.directive';

@Component({
  selector: 'app-change-detect',
  standalone: true,
  imports: [CommonModule, WraptextPipe,FormatDatePipe, OnhovertextcolorDirective],
  templateUrl: './change-detect.component.html',
  styleUrl: './change-detect.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChangeDetectComponent {
  @Input()
  bulletin: Bulletin;
  date = new Date();

  constructor(private cdr: ChangeDetectorRef) {
    this.bulletin = new Bulletin('Angular Change Detection Default', this.date)
  }

  ngOnInit(): void {

  }
  changeDetectionDefault() {
    this.bulletin = new Bulletin('Angular Change Detection Default', this.date)
 this.cdr.detectChanges()
}
  changeDetectionOnPush() {
    setTimeout(() => {
      this.bulletin = new Bulletin('Angular Change Detection onPush 1st', (this.date))
      this.cdr.detectChanges()

    }, 1000);

    setTimeout(() => {
      this.bulletin = new Bulletin('Angular Change Detection onPush 2nd', (this.date))

    }, 2000);
    setTimeout(() => {
      this.bulletin = new Bulletin('Angular Change Detection onPush 3rd', (this.date))
      this.cdr.detectChanges()

    }, 3000);
  }

}
