import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true
})


export class FormatDatePipe implements PipeTransform {
  transform(value: any, ): string {
    var datePipe = new DatePipe("en-US");
    value = datePipe.transform(value, 'dd MMM yyyy hh:mm');
    return value;
  }

}


