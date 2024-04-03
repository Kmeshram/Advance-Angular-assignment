import { Component, Input } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-filetype',
  template: `
    <input type="file" [formControl]="formControl" [formlyAttributes]="field" (change)="onFileChange($event)" />
    <div *ngIf="fileError" class="invalid-feedback d-block">{{ errorMessage }}</div>
  `,

  styles: ``
})
export class FiletypeComponent extends  FieldType<FieldTypeConfig>{
   errorMessage: string = '';
   fileError: boolean = false;

  onFileChange(event: any): void {
    const file = event.target.files[0];
    // const maxSize = 10485760; // 10 MB;
    const maxSize = 1000000; // 10 MB
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf']; // Example allowed file types

    if (file && file.size > maxSize) {
      this.errorMessage = 'File size exceeds the limit (1 MB).';
      this.fileError = true;
      this.formControl.setErrors({ 'fileSizeExceeded': true });
      return;
    }

    if (file && !allowedTypes.includes(file.type)) {
      this.errorMessage = 'Invalid file type. Only JPEG, PNG, and PDF files are allowed.';
      this.fileError = true;
      this.formControl.setErrors({ 'invalidFileType': true });
      return;
    }

    this.fileError = false;
    this.formControl.setErrors(null);
  }

 
}
