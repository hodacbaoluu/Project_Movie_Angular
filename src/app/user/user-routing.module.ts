import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoUserComponent } from './info-user/info-user.component';


import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: InfoUserComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
