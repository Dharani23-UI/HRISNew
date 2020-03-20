import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UsereditComponent } from './useredit/useredit.component';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import { UserlistComponent } from './userlist/userlist.component';
import { GenderPipe } from './gender.pipe';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    UsercreateComponent,
    UsereditComponent,
    PagenotfoundComponent,
    UserlistComponent,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormlyModule.forRoot(
      {
        validators: [
          {
            name: 'UserName', validation: UserName
          }, {
            name: 'CandidateName', validation: CandidateName
          },

        ],
        validationMessages: [
          { name: 'UserName', message: usernamemessage },
          { name: 'CandidateName', message: CandidateNamemessage },
          { name: 'required', message: 'This field is required' },
        ],

        types: [
          {
            name: 'text',
            extends: 'input'
          },
          {
            name: 'number',
            extends: 'input'
          }
        ]
      }

    ),
    FormlyBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function UserName(uname: FormControl) {
  return /^[A-ZA-z]\w{7,29}$/.test(uname.value) ? null : { 'candidateName': true };
}
export function usernamemessage(err, field: FormlyFieldConfig) {
  return `"${field.formControl.value}" Enter proper user name`;
}
export function CandidateName(cname: FormControl) {
  return /^[A-ZA-z]\w{7,29}$/.test(cname.value) ? null : { 'candidateName': true };
}
export function CandidateNamemessage(err, field: FormlyFieldConfig) {
  return `"${field.formControl.value}" Enter proper candidate name`;
}
