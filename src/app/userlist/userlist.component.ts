import { Component, OnInit } from '@angular/core';
import { usernamemessage } from '../app.module';
import { userStoreService } from '../userstore.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers:[userStoreService]
})
export class UserlistComponent implements OnInit {

  constructor(private getuser:userStoreService  ) { }
public list = JSON.parse(localStorage.getItem('users'));
  ngOnInit() {
    let ulist=JSON.parse(localStorage.getItem('users'));
    
    console.log(ulist);    
  }
  
  }
 


