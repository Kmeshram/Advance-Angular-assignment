import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wraptext',
  standalone: true
})
export class WraptextPipe implements PipeTransform {

  transform(value: string, limit:number): string {
    return value.length<limit? value:value.slice(0,limit)+'...';
  }

}
