import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CinemaService } from '../../core/service/cinema/cinema.service';

@Component({
  selector: 'app-chi-tiet-rap',
  templateUrl: './chi-tiet-rap.component.html',
  styleUrls: ['./chi-tiet-rap.component.scss']
})
export class ChiTietRapComponent implements OnInit {
  listMa: any;
  maHeThongRap: any = [];
  listRap: any;
  lichChieu: any;
  maCumRap: string = "";
  tenPhim: any;
  thuNgay: any = [
    {
      thu: "Thứ Hai"
    }, {
      thu: "Thứ Ba"
    },
    {
      thu: "Thứ Sáu"
    },
    {
      thu: "Thứ Năm"
    },
    {
      thu: "Thứ Sáu"
    },
    {
      thu: "Thứ Bảy"
    },
    {
      thu: "Chủ Nhật"
    }
  ]
  constructor(private activatedRoute: ActivatedRoute, private cinemaService: CinemaService, private router: Router) { }


  getListMaRap() {
    this.activatedRoute.params.subscribe((data) => {
      this.listMa = data;
      console.log(this.listMa);

    })
  }
  // getInfoRap() {
  //   this.cinemaService.getCinemaAPI().subscribe((data) => {
  //     this.listRap = data;
  //     console.log(this.listRap);
  //     this.maHeThongRap = this.listRap.findIndex((data: any) => {
  //       console.log(data.maHeThongRap);


  //     })
  //   }
  //   )
  // }
  getInfoCumRap() {
    this.cinemaService.getInfoCumRapCinemaAPI(this.listMa.maHeThongRap).subscribe((data) => {
      console.log(data);
      this.listRap = data;

    })
  }
  getLichChieuRap() {
    this.cinemaService.getInfoChieuCinemaAPI(this.listMa.maHeThongRap).subscribe((data) => {
      console.log(data);

      this.lichChieu = data;


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
  handleCumRap(maCumRap: string) {
    this.maCumRap = maCumRap;
    console.log(maCumRap);
    this.router.navigate([`/chi-tiet-rap/${this.listMa.maHeThongRap}/${maCumRap}`])

  }
  handlePhim(tenPhim: any, maRap: any) {
    console.log(tenPhim, maRap);


  }
  // test() {
  //   for (let index = 0; index < this.thuNgay.length - 1; index++) {
  //     for (let index1 = index + 1; index1 < this.thuNgay.length; index1++) {
  //       if (this.thuNgay[index] != this.thuNgay[index1]) {
  //         console.log(this.thuNgay);

  //       }

  //     }

  //   }
  // }

  ngOnInit(): void {
    this.getListMaRap();
    // this.getInfoRap();
    this.getInfoCumRap();
    this.getLichChieuRap();
    // this.test();





  }

}
