import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CinemaService } from '../core/service/cinema/cinema.service';
import { MovieService } from '../core/service/movie/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {


  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private sanitized: DomSanitizer, private router: Router, private cinemaService: CinemaService) { }
  maPhim: any;
  infoMovie: any;
  lichChieuMovie: any;
  thongTinRap: any;
  cinema: any;
  getTenCumRap: any;
  getChiTiet: any;
  thongTinCumRap: any;
  thu: string = "Thứ Hai";
  maHeThongRap: string = "";
  thuNgay: any = [
    {
      id: 0,
      thu: "Thứ Hai"
    }, {
      id: 1,
      thu: "Thứ Ba"
    },
    {
      id: 2,
      thu: "Thứ Tư"
    },
    {
      id: 3,
      thu: "Thứ Năm"
    },
    {
      id: 4,
      thu: "Thứ Sáu"
    },
    {
      id: 5,
      thu: "Thứ Bảy"
    },
    {
      id: 6,
      thu: "Chủ Nhật"
    }
  ]
  idRap: any = [
    {
      id: 'bhd',
    },
    {
      id: 'cgv',
    },
    {
      id: 'cine',

    },
    {
      id: 'galaxy',

    },
    {
      id: 'lotte',
    },
    {
      id: 'mega',
    }
  ];
  listMaHeThongRap: any = [];
  index: number = 0;
  s2Index: number = 0;
  sIndex: number = 0;
  getMaPhim() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.maPhim = params.maPhim;

    })
  }
  getDay(ngay: any) {
    let d = new Date(ngay);
    let day = d.getDay();
    let dayname;
    switch (day + 1) {
      case 1:
        dayname = "Chủ Nhật"
        break;
      case 2:
        dayname = "Thứ Hai"
        break;
      case 3:
        dayname = "Thứ Ba"
        break;
      case 4:
        dayname = "Thứ Tư"
        break;
      case 5:
        dayname = "Thứ Năm"
        break;
      case 6:
        dayname = "Thứ Sáu"
        break;
      case 7:
        dayname = "Thứ Bảy"
        break;

      default:
        break;
    }
    return dayname;
  }
  getThu(thu: any, stt: any) {
    this.thu = thu;
    this.index = stt;
    console.log(thu, stt);

  }
  getMaLichChieu(maLichChieu: any) {
    this.router.navigate([`/booking/${maLichChieu}`]);

  }
  getInfoMovieAPI() {
    this.movieService.getCarouselMovieApi(this.maPhim).subscribe((data) => {
      this.infoMovie = data;
      console.log(data);
      this.lichChieuMovie = this.infoMovie.lichChieu;
      this.listMaHeThongRap.push({ maHeThongRap: this.lichChieuMovie[0].thongTinRap.maHeThongRap, tenCumRap: this.lichChieuMovie[0].thongTinRap.tenCumRap });
      this.lichChieuMovie.forEach((value: any, index: any) => {
        console.log(value.thongTinRap.maCumRap);

        if ((index <= this.lichChieuMovie.length - 2) && (this.lichChieuMovie[index].thongTinRap.maCumRap != this.lichChieuMovie[index + 1].thongTinRap.maCumRap)) {

          this.listMaHeThongRap.push({ maHeThongRap: this.lichChieuMovie[index + 1].thongTinRap.maHeThongRap, tenCumRap: this.lichChieuMovie[index + 1].thongTinRap.tenCumRap });



        }

      });


      this.getTenCumRap = this.listMaHeThongRap
        .map((v: any) => v['maHeThongRap'])
        .map((v: any, i: any, array: any) => array.indexOf(v) === i && i)
        .filter((v: any) => this.listMaHeThongRap[v])
        .map((v: any) => this.listMaHeThongRap[v]);
      this.getChiTiet = this.listMaHeThongRap
        .map((v: any) => v['tenCumRap'])
        .map((v: any, i: any, array: any) => array.indexOf(v) === i && i)
        .filter((v: any) => this.listMaHeThongRap[v])
        .map((v: any) => this.listMaHeThongRap[v]);
      this.getMaCumRap();

    })

  }
  getCinemaApi() {
    this.cinemaService.getCinemaAPI().subscribe((data) => {
      console.log(data);
      this.cinema = data;
      console.log(this.cinema);


    })
  }
  getMaCumRap() {
    this.listMaHeThongRap.map((value: any) => {

      this.cinemaService.getInfoCumRapCinemaAPI(value.maHeThongRap).subscribe((data) => {
        this.thongTinCumRap = data;

      })
    })

  }
  add(a: number) {
    return a + 1;
  }
  getStt(stt: number, maHeThongRap: string) {
    console.log(stt);
    this.s2Index = stt;
    this.maHeThongRap = maHeThongRap;
  }
  trailer(oldURL: string): SafeResourceUrl {
    if (oldURL) {
      oldURL = oldURL.replace("watch?v=", "embed/");
    }
    return this.sanitized.bypassSecurityTrustResourceUrl(oldURL);
  }

  ngOnInit(): void {
    this.getMaPhim();
    this.getInfoMovieAPI();
    this.getCinemaApi();
    // this.getMaCumRap();
  }

}

