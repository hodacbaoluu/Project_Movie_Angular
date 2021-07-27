import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';




@NgModule({
  declarations: [
    PagesComponent, SignInComponent, SignUpComponent, MovieDetailComponent
  ],
  imports: [
    CommonModule, PagesRoutingModule, FormsModule, HomeModule, ReactiveFormsModule, RouterModule

  ],
  exports: [PagesComponent, SignInComponent, SignUpComponent]
})
export class PagesModule { }
