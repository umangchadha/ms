import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sign'
})
export class SignPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Math.sign(value) > 0 ?
      '+' + value : '-' + value
  }

}
