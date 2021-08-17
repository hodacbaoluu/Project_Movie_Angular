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
import { BookingModule } from './booking/booking.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { MatDialogModule } from '@angular/material/dialog';
import { SafePipeModule } from 'safe-pipe';





@NgModule({

  declarations: [
    PagesComponent, SignInComponent, SignUpComponent, MovieDetailComponent
  ],
  imports: [
    CommonModule, PagesRoutingModule, FormsModule, HomeModule, ReactiveFormsModule, RouterModule, BookingModule, SafePipeModule

  ],
  exports: [PagesComponent, SignInComponent, SignUpComponent]
})
export class PagesModule { }
