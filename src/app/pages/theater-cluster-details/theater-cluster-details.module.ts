import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheaterClusterDetailsRoutingModule } from './theater-cluster-details-routing.module';
import { TheaterClusterDetailsComponent } from './theater-cluster-details.component';


@NgModule({
  declarations: [
    TheaterClusterDetailsComponent
  ],
  imports: [
    CommonModule,
    TheaterClusterDetailsRoutingModule
  ]
})
export class TheaterClusterDetailsModule { }
