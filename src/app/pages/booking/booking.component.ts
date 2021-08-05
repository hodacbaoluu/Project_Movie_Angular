import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/service/auth/auth.service';
import { CinemaService } from '../core/service/cinema/cinema.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  ListGhe: any = [];
  thongTinPhim: any = [];
  tenGhe?: string;
  tongTien: number = 0;
  danhSachGheDaDat: any = [];
  token: any;
  currenUser: any = null;
  datVe: any = {};
  maGheDangChon?: number;
  giaVeDangChon?: number;
  danhSachVe: any = [];
  listMa: any;
  constructor(
    private cinemaService: CinemaService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getMaLichChieu();
    this.cinemaService.getDanhSachPhongVe(this.listMa.maLichChieu).subscribe((data) => {
      console.log(data);
      this.thongTinPhim.push(data);
      this.ListGhe = this.thongTinPhim[0].danhSachGhe;
      console.log(this.ListGhe);
    });

    this.authService.currentUser.subscribe((data) => {
      this.currenUser = data;
      this.token = this.currenUser.accessToken;
    });

  }
  getMaLichChieu() {
    this.activatedRoute.params.subscribe((data) => {
      this.listMa = data;
      console.log(this.listMa.maLichChieu);

    })
  }
  chonGhe(value: any, tenGhe: any) {

    console.log(value, tenGhe);
    if (value) {
      this.danhSachGheDaDat.push(tenGhe);
      for (let index in this.danhSachGheDaDat) {
        if (this.danhSachGheDaDat[index].tenGhe === tenGhe.tenGhe) {
          this.tongTien += this.danhSachGheDaDat[index].giaVe;
          // this.maGheDangChon = this.danhSachGheDaDat[index].maGhe;
          // this.giaVeDangChon = this.danhSachGheDaDat[index].giaVe;
          this.danhSachVe.push({
            maGhe: this.danhSachGheDaDat[index].maGhe,
            giaVe: this.danhSachGheDaDat[index].giaVe,
          });
          console.log(this.danhSachVe);
        }
      }
    } else {
      for (let index in this.danhSachGheDaDat) {
        if (this.danhSachGheDaDat[index].tenGhe === tenGhe.tenGhe) {
          this.tongTien -= this.danhSachGheDaDat[index].giaVe;
          console.log(this.tongTien);
          this.danhSachGheDaDat.splice(index, 1);
          this.danhSachVe.splice(index, 1);
        }
      }
    }
    this.datVe = {
      maLichChieu: this.listMa.maLichChieu,
      danhSachVe: this.danhSachVe,
      taiKhoanNguoiDung: this.authService.getCurrentUser().taiKhoan,
    };
    console.log(this.danhSachGheDaDat);
    console.log(this.datVe);
  }


  handleTime(event: any) {
    if (event.action === 'done') {
      Swal.fire(
        'Sao không mua vé ??? ',
        'Bạn đã hết thời gian 5 phút chọn vé ! Vui lòng đặt lại vé !!!',
        'question'
      );
      location.reload();
    }
    setTimeout(() => window.location.reload(), 300000);
  }

  datMuaGhe() {
    this.authService
      .postQuanLyDatVe(this.datVe, this.token)
      .subscribe((data) => {
        console.log(data);

      });
  }
}
