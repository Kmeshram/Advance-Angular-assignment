import { Directive } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  // selector: '[appFileValueAccessor]',
selector:'input[type=file]',
  host: {
    '(change)': 'onChange($event.target.files)',
    '(blur)': 'onTouched()',
  },
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: FileValueAccessorDirective, multi: true }],
})
export class FileValueAccessorDirective implements ControlValueAccessor {

  constructor() { }
  value: any;
  onChange = (_: any) => {
    console.log('abc')
  };
  onTouched = () => {};

  writeValue(_value: any) {}
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
