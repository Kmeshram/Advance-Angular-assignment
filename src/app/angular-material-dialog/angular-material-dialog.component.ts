import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MatDialogModule,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-angular-material-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './angular-material-dialog.component.html',
  styleUrl: './angular-material-dialog.component.scss'
})
export class AngularMaterialDialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(){}
   
  
}

