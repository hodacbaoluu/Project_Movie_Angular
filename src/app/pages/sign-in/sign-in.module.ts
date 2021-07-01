import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { HeaderModule } from '../home/header/header.module';
import { HeaderComponent } from '../home/header/header.component';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule,HeaderModule
  ],

})
export class SignInModule { }
