import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { Component, OnInit, } from '@angular/core';
interface Option {
  label: string;
  value: any;
}

@Component({
  selector: 'app-searchable-select',
 template:`   <input type="text" [formControl]="formControl" [matAutocomplete]="auto"  placeholder="Search option">
 <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
   <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
     {{ option }}
   </mat-option>
 </mat-autocomplete>
`,
 styles: ``
})
export class SearchableSelectComponent extends FieldType implements OnInit {
 filteredOptions: Observable<string[]> = new Observable<string[]>(); // Initialize as an empty observable

  ngOnInit() {
     this.filteredOptions = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value))
    );
  }

  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if (Array.isArray(this.props.options)) { // Check if options is an array
      return this.props.options.filter((option: string) => option.toLowerCase().includes(filterValue));
    }
    return []; // Return empty array if options is not an array
  }

  displayFn(value: string): string {
    return value ? value : '';
  }

}
