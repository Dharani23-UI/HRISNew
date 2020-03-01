import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { userStoreService } from '../userstore.service';
import { CandidateName } from '../app.module';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css'],
  providers:[userStoreService]
})
export class UsercreateComponent implements OnInit {
  constructor(private userstore:userStoreService) { }
  form = new FormGroup({});
  model = { UserName:'',
            CandidateName:'',
            Gender:'',
            Age:'' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'UserName',
      type: 'text',
  
      templateOptions: {
        type: 'text',
        label: 'UserName',
        placeholder: 'Enter UserName',
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
        placeholder: 'Enter Name',
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
        placeholder: 'Select Gender',
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
        type:'number',
        placeholder: 'Enter Age',
        required: true,
  
      },
  
    }
  ];

  ngOnInit() {
  }
  onSubmit( model ) {
  
    this.userstore.setuser(model);
    
  }
}
