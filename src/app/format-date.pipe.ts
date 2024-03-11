import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true
})


export class FormatDatePipe implements PipeTransform {
 
  transform(date: Date | string, day: number, format: string = 'dd MMM yyyy'): any {
    date = new Date();  // if orginal type was a string
    date.setDate(date.getDate()-day);
    return new DatePipe('en-US').transform(date, format);
  }
}


