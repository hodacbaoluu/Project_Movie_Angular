import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMovieRoutingModule } from './add-movie-routing.module';
import { AddMovieComponent } from './add-movie.component';


@NgModule({
  declarations: [
    AddMovieComponent
  ],
  imports: [
    CommonModule,
    AddMovieRoutingModule
  ]
})
export class AddMovieModule { }
