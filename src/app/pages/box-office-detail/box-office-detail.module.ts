import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxOfficeDetailRoutingModule } from './box-office-detail-routing.module';
import { BoxOfficeDetailComponent } from './box-office-detail.component';


@NgModule({
  declarations: [
    BoxOfficeDetailComponent
  ],
  imports: [
    CommonModule,
    BoxOfficeDetailRoutingModule
  ]
})
export class BoxOfficeDetailModule { }
