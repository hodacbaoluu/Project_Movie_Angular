import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeModule } from './home/home.module';
import { Movie1Component } from '../components/movie1/movie1/movie1.component';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,HomeModule
  ],
  exports:[PagesComponent]
})
export class PagesModule { }
