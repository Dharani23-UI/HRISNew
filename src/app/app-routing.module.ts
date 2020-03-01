import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsereditComponent } from './useredit/useredit.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserlistComponent } from './userlist/userlist.component';


const routes: Routes = [
  { path: '', redirectTo: '/usercreate', pathMatch: 'full' },
  { path: 'usercreate', component: UsercreateComponent },
  { path: 'useredit', component: UsereditComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: "**", component: PagenotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingcomponents = [UsercreateComponent,
//   UsereditComponent,
//   PagenotfoundComponent]