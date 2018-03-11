

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'convertDate'})

export class ConvertDatePipe implements PipeTransform {
  transform(value:number) : string {
    if(value){
      return new Date(value * 1000).toDateString();
    }
  }

}
