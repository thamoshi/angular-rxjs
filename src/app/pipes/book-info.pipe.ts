import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookInfo'
})
export class BookInfoPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length > 30) return value.slice(0,25) + "..."
    return value
  }

}
