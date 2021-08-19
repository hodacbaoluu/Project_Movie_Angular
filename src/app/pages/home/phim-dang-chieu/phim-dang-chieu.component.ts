import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from '../../core/service/movie/movie.service';
import { ItemPhimDangChieuComponent } from '../item-phim-dang-chieu/item-phim-dang-chieu.component';
declare var $: any;
@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit {

  constructor(private phimDangChieuService: MovieService, private sanitized: DomSanitizer) { }
  danhSachPhimDangChieu: any = [];
  maNhom: number = 6;
  clip: any;
  ktra: boolean = true;
  getNameMovie() {
    this.phimDangChieuService.getListMovieApi(this.maNhom).subscribe((data) => {
      this.danhSachPhimDangChieu = data;
    })
  }
  countChangedHandler(trailer: any) {
    this.clip = trailer;
    // this.clip = this.sanitized.bypassSecurityTrustResourceUrl(trailer);
    // console.log(this.clip);

  }
  exitVideo(ktra: boolean) {
    this.ktra = ktra;
    // console.log('exit' + this.ktra);

  }
  trailer(oldURL: string) {
    return this.sanitized.bypassSecurityTrustResourceUrl(oldURL);
  }
  dongVideo() {
    this.ktra = false;
    // console.log(this.ktra);

  }
  ngOnInit(): void {
    this.getNameMovie();
    setTimeout(() => {
      $('.lazy').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              rows: 2,
              slidesToShow: 3,
              slidesToScroll: 3,

            }
          },
          {
            breakpoint: 992,
            settings: {
              rows: 1,
              slidesToShow: 4,
              slidesToScroll: 3,

            }
          },

          {
            breakpoint: 784,
            settings: {

              rows: 1,
              slidesToShow: 3,
              slidesToScroll: 3,
            }

          },
          {
            breakpoint: 560,
            settings: {
              rows: 1,
              arrows: false,
              slidesToShow: 3,
              slidesToScroll: 2,

            }
          },
          {
            breakpoint: 480,
            settings: {
              rows: 1,
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 2,

            }
          },
        ]
      });
    }, 500)

  }
}



