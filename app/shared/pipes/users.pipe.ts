import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'users_search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any=[], args: any): any {
    console.log('args',args);
    if(!args) return value;
    return value.filter((res:any)=>res.firstname.toLowerCase().startsWith(args.toLowerCase().trim())||res.lastname.toLowerCase().startsWith(args.toLowerCase().trim())||res.email.toLowerCase().startsWith(args.toLowerCase().trim())||res.username.toLowerCase().startsWith(args.toLowerCase().trim())||res.phone.toLowerCase().startsWith(args.toLowerCase().trim())||res.role.toLowerCase().startsWith(args.toLowerCase().trim())||res.gender.toLowerCase().startsWith(args.toLowerCase().trim()))
  }

}
