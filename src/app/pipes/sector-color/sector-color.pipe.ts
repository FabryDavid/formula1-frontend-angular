import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sectorColor',
})
export class SectorColorPipe implements PipeTransform {
  transform(value: 1 | 2 | 3): string {
    switch (value) {
      case 1:
        return '#b41619';
      case 2:
        return '#1884a5';
      default:
        return '#ffd200';
    }
  }
}
