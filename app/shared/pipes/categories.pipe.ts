
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categories_search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any=[], args: any): any {
    console.log('args',args);
    if(!args) return value;
    return value.filter((res:any)=>res.category_title.toLowerCase().startsWith(args.toLowerCase().trim()))
  }

}
