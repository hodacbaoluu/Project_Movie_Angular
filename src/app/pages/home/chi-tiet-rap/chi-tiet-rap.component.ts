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
  thu: string = "Thứ Hai";
  maCumRap: string = "";
  tenPhim: any = [];
  ngayChieu: any = [];
  hide: boolean = false;
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
  index: number = 0;
  sIndex: number = 0;
  s2Index: number = 0;
  s3Index: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private cinemaService: CinemaService, private router: Router) { }


  getListMaRap() {
    this.activatedRoute.params.subscribe((data) => {
      this.listMa = data;
      console.log(this.listMa);

    })
  }

  getInfoCumRap() {
    this.cinemaService.getInfoCumRapCinemaAPI(this.listMa.maHeThongRap).subscribe((data) => {
      console.log(data);
      this.listRap = data;
      this.listRap.forEach((e: any, index: any) => {
        if (e.maCumRap == this.listMa.maCumRap) {
          this.sIndex = index;
        }


      });

      this.maCumRap = this.listMa.maCumRap;

    })
  }
  getLichChieuRap() {
    this.cinemaService.getInfoChieuCinemaAPI(this.listMa.maHeThongRap).subscribe((data) => {
      console.log(data);

      this.lichChieu = data;

    })



  }

  setIndex(index: number, maCumRap: string, maHeThongRap: any) {
    this.s3Index = index;
    this.maCumRap = maCumRap;
    this.thu = "Thứ Hai";
    this.index = 0;
    console.log(index);

    console.log(maCumRap);

    this.router.navigate([`/chi-tiet-rap/${maHeThongRap}/${maCumRap}`])
  }
  add(a: number) {
    return a + 1;
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
    console.log(thu);

  }
  handleCumRap(maCumRap: string) {

    this.maCumRap = maCumRap;
    console.log(maCumRap);
    this.router.navigate([`/chi-tiet-rap/${this.listMa.maHeThongRap}/${maCumRap}`])

  }
  handlePhim(tenPhim: any, maRap: any) {
    console.log(tenPhim, maRap);


  }

  booking(){
    this.router.navigate(["/booking"])
  }


  ngOnInit(): void {
    this.getListMaRap();
    // this.getInfoRap();
    this.getInfoCumRap();
    this.getLichChieuRap();







  }

}
