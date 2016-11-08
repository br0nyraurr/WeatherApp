import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kToFTemp'
})
export class KToFTempPipe implements PipeTransform {

  transform(value: number, args: any[]) {
    return Math.floor(((value * 9/5) - 459.67)*100)/100;
  }

}
