import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize',
  pure: true
})
export class TamanhoPipe implements PipeTransform {

  transform(value: any): any {
    if (value < 1000) {
      return (value.toFixed(6) + ' bytes');
    } else if(value < 1000000) {
      return ((value / 1025).toFixed(2) + ' KB');
    } else if (value < 1000000000) {
      return ((value / (1024 * 1024)).toFixed(2) + ' MB');
    }
  }

}
