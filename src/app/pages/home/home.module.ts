import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { CarouselPhimComponent } from './carousel-phim/carousel-phim.component';
import { BlockAppComponent } from './block-app/block-app.component';
import { NewsBlockComponent } from './news-block/news-block.component';
import { ItemCarouselComponent } from './item-carousel/item-carousel.component';



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


  ],
  imports: [
    CommonModule,
  HeaderModule,FooterModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
