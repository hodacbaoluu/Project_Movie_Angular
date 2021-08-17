import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';


import { AdminModule } from './admin/admin.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SafePipeModule } from 'safe-pipe';


// import { SlickCarouselComponent, SlickCarouselModule, } from 'ngx-slick-carousel';

@NgModule({

  declarations: [AppComponent],
  imports: [
    SafePipeModule,
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    UserModule,
    BrowserAnimationsModule, MatIconModule, AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
