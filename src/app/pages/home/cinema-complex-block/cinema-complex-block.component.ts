import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hidden } from '@material-ui/core';
import { takeUntil } from 'rxjs/operators';
import { CinemaService } from '../../core/service/cinema/cinema.service';

@Component({
  selector: 'app-cinema-complex-block',
  templateUrl: './cinema-complex-block.component.html',
  styleUrls: ['./cinema-complex-block.component.scss']
})
export class CinemaComplexBlockComponent implements OnInit {

  constructor(private cinemaService: CinemaService, private router: Router) { }
  heThongRap: any = [];
  maHeThongRap: string = "BHDStar";
  thongTinRap: any = [];
  listLichChieu: any = [];
  maCumRap: string = "bhd-star-cineplex-3-2";

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
  sIndex: number = 0;
  s2Index: number = 0;
  s3Index: number = 0;
  maHeThong(ma: any, index: number) {
    this.s3Index = 0;
    this.maHeThongRap = ma;
    this.s2Index = index;





    this.getInfoCumRap();
    this.getInforChieuCinema();



  }
  setIndex(index: number, maCumRap: string) {
    this.s3Index = index;
    this.maCumRap = maCumRap;
  }
  getHinhRap() {
    this.cinemaService.getCinemaAPI().subscribe((data) => {
      data.map((value: any) => {
        this.heThongRap.push(value);

      }
      )

    })
  }
  add(a: number) {
    return a + 1;
  }
  getInfoCumRap() {
    this.thongTinRap = [];
    this.cinemaService.getInfoCumRapCinemaAPI(this.maHeThongRap).subscribe((data) => {
      data.map((value: any) => {
        this.thongTinRap.push(value);
        this.maCumRap = this.thongTinRap[0].maCumRap;
        console.log(this.thongTinRap);

      })

    })



  }
  getInforChieuCinema() {
    let lstLichChieu: any = [];
    this.cinemaService.getInfoChieuCinemaAPI(this.maHeThongRap).subscribe((data) => {
      data.map((value: any) => {
        lstLichChieu.push(value);
        this.listLichChieu = lstLichChieu[0].lstCumRap;
        console.log(this.listLichChieu);


      })
    })
  }


  ngOnInit(): void {
    this.getHinhRap();
    this.getInfoCumRap();
    this.getInforChieuCinema();
    console.log(this.idRap.values);










  }

}
