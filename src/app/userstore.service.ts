import { Injectable } from '@angular/core';
import { userDetail } from './userDetail.model';
import { CandidateName } from './app.module';

@Injectable({
    providedIn:'root'
})

export class userStoreService{

constructor( ){
let abc=localStorage.getItem('users');
if(JSON.parse(abc)==null){
    return null;
}
    JSON.parse(abc);
    //console.log(JSON.parse(abc));
    this.userdata=JSON.parse(abc);     
}
    
   public userdata:userDetail[]=[]
    setuser(user){

      //  console.log(user);


this.userdata.push(new userDetail (user.CandidateName,user.UserName,user.Age,user.Gender));
//console.log(this.userdata);

localStorage.setItem("users", JSON.stringify(this.userdata) );




}
}