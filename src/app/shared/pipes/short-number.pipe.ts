import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'shortNumber'})
export class ShortNumberPipe implements PipeTransform {
  transform(value: number, decimals: number = 0) {
    let exp;
    const suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];

    if (value < 1000) {
      return value;
    }

    exp = Math.floor(Math.log(value) / Math.log(1000));

    return (value / Math.pow(1000, exp)).toFixed(decimals) + suffixes[exp - 1];
  }
}
