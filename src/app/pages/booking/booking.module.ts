import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { ListGheComponent } from './list-ghe/list-ghe.component';
import { HomeModule } from '../home/home.module';
import { CountdownModule } from 'ngx-countdown';


@NgModule({
  declarations: [
    BookingComponent,
    ListGheComponent
  ],
  imports: [
    CommonModule,
    HomeModule, CountdownModule,
  ],
})
export class BookingModule { }
