import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'titleFilter'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      const rVal = (val.title.toLocaleLowerCase().includes(args.toLowerCase()));
      return rVal;
    });

  }

}
