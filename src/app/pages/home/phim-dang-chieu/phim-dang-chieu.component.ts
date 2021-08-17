import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MovieService } from '../../core/service/movie/movie.service';
declare var $: any;
@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit {

  constructor(private phimDangChieuService: MovieService) { }
  danhSachPhimDangChieu: any = [];
  maNhom: number = 6;
  getTrailer(phim: any) {
    const index = this.danhSachPhimDangChieu.findIndex((item: any) => { return item.maPhim = phim.maPhim });
    if (index !== -1) {
      this.danhSachPhimDangChieu[index].trailer = phim.trailer;
    }
  }
  getNameMovie() {
    this.phimDangChieuService.getListMovieApi(this.maNhom).subscribe((data) => {
      this.danhSachPhimDangChieu = data;
    })
  }
  slick() {
    if (this.danhSachPhimDangChieu) {
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
    }
  }

  ngOnInit(): void {
    this.getNameMovie();
    setTimeout(() => {
      this.slick()
    }, 2000)


    //   setTimeout(() => {
    //     $('.lazy').slick({
    //       lazyLoad: 'ondemand',
    //       slidesToShow: 4,
    //       slidesToScroll: 4,
    //       rows: 2,
    //       responsive: [
    //         {
    //           breakpoint: 1200,
    //           settings: {
    //             rows: 2,
    //             slidesToShow: 3,
    //             slidesToScroll: 3,

    //           }
    //         },
    //         {
    //           breakpoint: 992,
    //           settings: {
    //             rows: 1,
    //             slidesToShow: 4,
    //             slidesToScroll: 3,

    //           }
    //         },

    //         {
    //           breakpoint: 768,
    //           settings: {

    //             rows: 1,
    //             slidesToShow: 4,
    //             slidesToScroll: 3,
    //           }

    //         },
    //         {
    //           breakpoint: 560,
    //           settings: {
    //             rows: 1,
    //             arrows: false,
    //             slidesToShow: 5,
    //             slidesToScroll: 4,

    //           }
    //         },
    //       ]
    //     });

    //   }, 2000)
  }




}
