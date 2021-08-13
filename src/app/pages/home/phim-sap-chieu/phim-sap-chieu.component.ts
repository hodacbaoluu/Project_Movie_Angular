import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/service/movie/movie.service';
declare var $: any;
@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.scss']
})
export class PhimSapChieuComponent implements OnInit {

  constructor(private phimSapChieuService: MovieService) { }
  danhSachPhimSapChieu: any = [];
  danhSachLichChieu: any = [];
  maNhom: number = 7;

  getNameMovie() {
    this.phimSapChieuService.getListMovieApi(this.maNhom).subscribe((data) => {
      this.danhSachPhimSapChieu = data;

    })
  }
  //   getInfoMovie(){

  //     this.phimSapChieuService.getCarouselMovieApi(this.maPhim).subscribe((data)=>{
  //       console.log(data);
  //       this.danhSachLichChieu=data;

  //     })
  // }
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
            breakpoint: 768,
            settings: {

              rows: 1,
              slidesToShow: 4,
              slidesToScroll: 3,
            }

          },
          {
            breakpoint: 560,
            settings: {
              rows: 1,
              arrows: false,
              slidesToShow: 5,
              slidesToScroll: 4,

            }
          },
        ]
      });

    }, 2000)
  }


}
