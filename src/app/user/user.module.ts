import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { PersonalInformationComponent } from './personal-information/personal-information.component';


@NgModule({
  declarations: [
    UserComponent,PersonalInformationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,RouterModule
  ],
  exports:[PersonalInformationComponent ]
})
export class UserModule { }
