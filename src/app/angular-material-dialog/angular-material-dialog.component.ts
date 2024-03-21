import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogcontentComponent } from '../dialogcontent/dialogcontent.component';
@Component({
  selector: 'app-angular-material-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './angular-material-dialog.component.html',
  styleUrl: './angular-material-dialog.component.scss'
})
export class AngularMaterialDialogComponent {


  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogcontentComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

  
}

