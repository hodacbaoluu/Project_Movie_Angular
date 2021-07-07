import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpGuard } from './core/guard/sign-up.guard';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
      {
        path:'',
        component:HomeComponent,
      },
      {
        path:'sign-in',
        component:SignInComponent,
      },{
        path:'sign-up',
        component:SignUpComponent,
        canDeactivate:[SignUpGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
