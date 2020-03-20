import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name:'gender'
})

export class GenderPipe implements PipeTransform{

   
    transform(value:any) {
        
        if(value==1){
            return 'male';
        }
        else{
            return 'Female';
        }

         
}}