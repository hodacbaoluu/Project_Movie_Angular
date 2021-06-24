import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieManagerRoutingModule } from './movie-manager-routing.module';
import { MovieManagerComponent } from './movie-manager.component';


@NgModule({
  declarations: [
    MovieManagerComponent
  ],
  imports: [
    CommonModule,
    MovieManagerRoutingModule
  ]
})
export class MovieManagerModule { }
