import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    PagesComponent,SignInComponent,SignUpComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    PagesRoutingModule,FormsModule,HomeModule
  ],
  exports:[PagesComponent,SignInComponent,SignUpComponent]
=======
    PagesRoutingModule,HomeModule,
  ],
  exports:[PagesComponent,]
>>>>>>> a1784535d5a045d060c1290785198fe79ebc159d
})
export class PagesModule { }
