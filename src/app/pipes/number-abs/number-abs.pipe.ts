import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberAbs',
})
export class NumberAbsPipe implements PipeTransform {
  transform(value: number): number {
    return Math.abs(value);
  }
}
