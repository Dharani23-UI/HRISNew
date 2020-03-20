import { Component, OnInit } from '@angular/core';
import { userStoreService } from '../userstore.service';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ParamMap, ActivatedRoute, Router, Route } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css'],
  providers: [userStoreService]
})
export class UsereditComponent implements OnInit {

  public users;
  constructor(private getusers1: userStoreService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe((data) => {
      this.users = data.get('id');
      console.log(this.users);
      this.getusers(this.users);
      
    })
  }

  getusers(id) {
    this.http.get('/api/users/' + id).subscribe((data) => {
      console.log(data);
      this.model = {
        UserName: data.UserName,
        CandidateName: data.CandidateName,
        Gender: data.Gender,
        Age: data.Age
      }
    })
    
  }
 
  form = new FormGroup({});
  model = {
    UserName: '',
    CandidateName: '',
    Gender: '',
    Age: ''
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'UserName',
      type: 'text',

      templateOptions: {
        type: 'text',
        label: 'UserName',
        // placeholder: 'Enter UserName',
        required: true,
      },
      validators: {
        validation: ['UserName'],
      }
    },
    {
      key: 'CandidateName',
      type: 'text',

      templateOptions: {
        type: 'text',
        label: 'Name',
        //  placeholder: 'Enter Name',
        required: true,
      },
      validators: {
        validation: ['CandidateName'],
      }
    },
    {
      key: 'Gender',
      type: 'select',

      templateOptions: {
        type: 'text',
        label: 'SelectGender',
        //  placeholder: 'Select Gender',
        required: true,
        options: [{
          value: 1,
          label: 'Male'
        },
        {
          value: 2,
          label: 'Female'
        }]
      }
    },
    {
      key: 'Age',
      type: 'input',

      templateOptions: {

        label: 'Age',
        type: 'number',
        //  placeholder: 'Enter Age',
        required: true,

      },

    }
  ];
  updateUser() {
   let id = this.users
  
    this.http.put('/api/users/'+id,this.model).subscribe((data) => {

      console.log(data)
    })
  }
}
