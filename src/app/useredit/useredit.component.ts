import { Component, OnInit } from '@angular/core';
import { userStoreService } from '../userstore.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css'],
  providers:[userStoreService]
})
export class UsereditComponent implements OnInit {
  

  constructor(private getusers:userStoreService) { }

  ngOnInit() {
     

}}
