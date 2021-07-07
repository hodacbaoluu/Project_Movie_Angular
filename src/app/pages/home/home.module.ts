import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { CarouselPhimComponent } from './carousel-phim/carousel-phim.component';
import { BlockAppComponent } from './block-app/block-app.component';
import { NewsBlockComponent } from './news-block/news-block.component';
import { ItemCarouselComponent } from './item-carousel/item-carousel.component';
import { ItemPhimDangChieuComponent } from './item-phim-dang-chieu/item-phim-dang-chieu.component';
import { ItemPhimSapChieuComponent } from './item-phim-sap-chieu/item-phim-sap-chieu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CinemaComplexBlockComponent } from './cinema-complex-block/cinema-complex-block.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HomeComponent,
    LoaiPhimComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    CarouselPhimComponent,
    BlockAppComponent,
    NewsBlockComponent,
    ItemCarouselComponent,
    ItemPhimDangChieuComponent,
    ItemPhimSapChieuComponent,
    FooterComponent,
    HeaderComponent,CinemaComplexBlockComponent,

  ],
  imports: [
 CommonModule,SlickCarouselModule,RouterModule

  ],
  exports:[HomeComponent,
    LoaiPhimComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    CarouselPhimComponent,
    BlockAppComponent,
    NewsBlockComponent,
    ItemCarouselComponent,
    ItemPhimDangChieuComponent,
    ItemPhimSapChieuComponent,
    FooterComponent,HeaderComponent]
})
export class HomeModule { }
