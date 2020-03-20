import { Component, OnInit } from '@angular/core';
import { usernamemessage } from '../app.module';
import { userStoreService } from '../userstore.service';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { splitClasses } from '@angular/compiler';
import { Router } from '@angular/router'

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [userStoreService]
})
export class UserlistComponent implements OnInit {
  public users;
  constructor(private getuser: userStoreService, private http: HttpClient, private router:Router) {
    this.http.get('/api/users').subscribe(data => {
      this.users = data;

    });
  }

 // public list = JSON.parse(localStorage.getItem('users'));
  ngOnInit() {
    //let ulist = JSON.parse(localStorage.getItem('users'));
   // console.log(ulist);
  }
  OnDelete(i) {
    // this.users.id==i;
    this.http.delete('/api/users/' + i.id).subscribe(value => {
      let d = this.users.indexOf(i);

      this.users.splice(d, 1);

    })

  }
  onEdit(user){
  
    
this.router.navigate(['/useredit/'+user.id]);

}

}




