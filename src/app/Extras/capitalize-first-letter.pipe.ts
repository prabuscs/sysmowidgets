import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter'
})
export class CapitalizeFirstLetterPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    let result = value.charAt(0).toUpperCase() + value.slice(1);
      if (result[1] === result[1].toUpperCase()) {
      result = result.charAt(0) + result.charAt(1).toLowerCase() + result.slice(2);
    }
    return result;
  }

}
