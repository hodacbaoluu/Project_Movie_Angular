import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
// import { SlickCarouselComponent, SlickCarouselModule, } from 'ngx-slick-carousel';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
