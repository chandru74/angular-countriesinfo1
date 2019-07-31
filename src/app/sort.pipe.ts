import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any,type?:string): any {
    if(args === "name"){
      if(type==='asc'){
      return value.sort((a:any,b:any)=>{
        if(a.name<b.name){
          return -1;
        } else if(a.name>b.name){
          return 1;
        }else{
          return 0;
        }
      });
      }else{
        return value.sort((a:any,b:any)=>{
        if(a.name<b.name){
          return 1;
        } else if(a.name>b.name){
          return -1;
        }else{
          return 0;
        }
      });
      }
    }
    else if(args ==="population"){
       if(type==='asc'){
        return value.sort((a:any,b:any)=>{
        if(a.population<b.population){
          return -1;
        } else if(a.population>b.population){
          return 1;
        }else{
          return 0;
        }
      });
       }else{
         return value.sort((a:any,b:any)=>{
        if(a.population<b.population){
          return 1;
        } else if(a.population>b.population){
          return -1;
        }else{
          return 0;
        }
      });
       }
    }
    else if(args ==="area"){
       if(type==='asc'){
          return value.sort((a:any,b:any)=>{
          if(a.area<b.area){
            return -1;
          } else if(a.area>b.area){
            return 1;
          }else{
            return 0;
          }
        });
       }else{
            return value.sort((a:any,b:any)=>{
          if(a.area<b.area){
            return 1;
          } else if(a.area>b.area){
            return -1;
          }else{
            return 0;
          }
        });
       }
    }
  }

}