import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../core/service/movie/movie.service';
declare var $: any;
@Component({
  selector: 'app-carousel-phim',
  templateUrl: './carousel-phim.component.html',
  styleUrls: ['./carousel-phim.component.scss']
})
export class CarouselPhimComponent implements OnInit, AfterViewInit {
  danhSachPhim: any;
  tenPhim: string = "Phim";
  maPhim: number = 0;
  maNhom: number = 6;
  tenCumRap: string = "Rạp";
  day: string = "Ngày xem";
  suatChieu: string = "Suất chiếu";
  maRap: string = "";
  maLichChieu: string = "";
  getTenRap: any;
  getDay: any;
  listThongTin: any = [];
  listDay: any = [];
  ktra: boolean = true;
  clip: any;
  handlePhim(tenPhim: string, maPhim: number) {
    this.listDay = [];
    this.listThongTin = [];
    this.tenPhim = tenPhim;
    this.maPhim = maPhim;
    console.log(maPhim);
    this.tenCumRap = "Rạp";
    this.day = "Ngày xem";
    this.suatChieu = "Suất chiếu"
    this.getInfoMovie();
  }
  handleRap(tenCumRap: string, maRap: string) {
    this.listDay = [];
    this.listThongTin = [];
    this.tenCumRap = tenCumRap;
    this.maRap = maRap;
    // console.log(maRap);
    this.day = "Ngày xem";
    this.suatChieu = "Suất chiếu"
    this.getInfoMovie();
  }
  handleDay(day: string) {
    this.listDay = [];
    this.listThongTin = [];
    this.day = day;
    this.getInfoMovie();
    this.suatChieu = "Suất chiếu"
    // console.log(day);

  }
  handleSuatChieu(suatChieu: string, maLichChieu: string) {
    this.suatChieu = suatChieu;
    // console.log(suatChieu);
    this.maLichChieu = maLichChieu;
    console.log(maLichChieu);
  }
  handleMuaVe() {
    if (this.maLichChieu != '') {
      this.router.navigate([`/booking/${this.maLichChieu}`])
    }
  }
  constructor(private movieService: MovieService, private router: Router) { }
  @Input() movieCarousel: any;
  movieList: any = [];
  // movieCarousel: any = [];
  movieCarouselActive: any = [];
  movieInfoList: any = [];

  listMaPhim: any[] = [1329, 3394, 4428, 4332, 1374];
  list: any[] = [];
  getListMovie() {
    this.movieService.getListMovieApi(this.maNhom).subscribe((data) => {
      this.movieList = data;
    })
  }
  // getCarouselMovie() {
  //   for (const maPhim of this.listMaPhim) {
  //     this.movieService.getCarouselMovieApi(maPhim).subscribe((data) => {
  //       this.list.push(data);
  //     })
  //   }
  //   this.movieCarousel = this.list;
  // }

  getNameMovie() {
    this.movieService.getListMovieApi(this.maNhom).subscribe((data) => {
      this.danhSachPhim = data;
    })
  }
  getInfoMovie() {

    this.movieService.getCarouselMovieApi(this.maPhim).subscribe((data) => {

      this.movieInfoList = data;
      this.movieInfoList.lichChieu.forEach((item: any) => {
        this.listThongTin.push({ tenCumRap: item.thongTinRap.tenCumRap, maRap: item.thongTinRap.maRap });
        this.listDay.push({ ngayChieuGioChieu: item.ngayChieuGioChieu.slice(0, 10), thongTinRap: item.thongTinRap, tenPhim: item.tenPhim })

      });
      this.getTenRap = this.listThongTin
        .map((v: any) => v['tenCumRap'])
        .map((v: any, i: any, array: any) => array.indexOf(v) === i && i)
        .filter((v: any) => this.listThongTin[v])
        .map((v: any) => this.listThongTin[v]);
      this.getDay = this.listDay
        .map((v: any) => v['ngayChieuGioChieu'])
        .map((v: any, i: any, array: any) => array.indexOf(v) === i && i)
        .filter((v: any) => this.listDay[v])
        .map((v: any) => this.listDay[v]);


    })
  }
  dongVideo() {
    this.ktra = false;
  }
  getTrailer(trailer: any) {
    this.clip = trailer;
  }
  exitVideo(ktra: boolean) {
    this.ktra = ktra;
    console.log(this.ktra);

  }
  ngOnInit(): void {
    // this.getCarouselMovie();
    // this.getInfoMovie();
    this.getListMovie();
    this.getNameMovie();
    setTimeout(() => {
      $('.fade1').slick({
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear'
      });
    }, 2000)


  }
  ngAfterViewInit(): void {
    // this.getCarouselMovie();
    // this.getListMovie();
    // this.getNameMovie();
    // $('.fade1').slick({
    //   arrows: false,
    //   infinite: true,
    //   speed: 500,
    //   fade: true,
    //   autoplay: true,
    //   autoplaySpeed: 5000,
    //   cssEase: 'linear'
    // });
  }

}
