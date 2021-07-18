import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from '../pages/home/home.module';
import { InfoUserComponent } from './info-user/info-user.component';
import { HistoryBookingComponent } from './history-booking/history-booking.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChiTietBookingComponent } from './chi-tiet-booking/chi-tiet-booking.component';


@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    UserComponent,PersonalInformationComponent, InfoUserComponent, HistoryBookingComponent, ChiTietBookingComponent
  ],
  imports: [
    CommonModule,HomeModule,
    UserRoutingModule,RouterModule,FormsModule,ReactiveFormsModule
  ],
  exports:[]
})
export class UserModule { }
