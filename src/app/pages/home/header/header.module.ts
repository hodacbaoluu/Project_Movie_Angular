import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './header.component';
import { SignInComponent } from '../../sign-in/sign-in.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
