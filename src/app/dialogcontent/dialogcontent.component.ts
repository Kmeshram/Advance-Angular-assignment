import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-dialogcontent',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent],
  templateUrl: './dialogcontent.component.html',
  styleUrl: './dialogcontent.component.scss'
})
export class DialogcontentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}
