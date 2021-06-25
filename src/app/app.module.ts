import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { Movie1Component } from './components/movie1/movie1/movie1.component';


@NgModule({
  declarations: [
    AppComponent,
    Movie1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,PagesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
