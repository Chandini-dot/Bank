import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerBanknameFilter'
})
export class BanksPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if(!args){
      return value;
    }
    return value.filter((val)=> {
      let rVal=(val.bankname.toLocaleLowerCase().includes(args))||(val.Branch.toLocaleLowerCase().includes(args));
   return rVal;
    })
  }}