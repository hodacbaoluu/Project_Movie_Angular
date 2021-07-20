import { Component, OnInit,Input } from '@angular/core';
import { CinemaService } from 'src/app/pages/core/service/cinema/cinema.service';
import { MovieService } from 'src/app/pages/core/service/movie/movie.service';

@Component({
  selector: 'app-chi-tiet-booking',
  templateUrl: './chi-tiet-booking.component.html',
  styleUrls: ['./chi-tiet-booking.component.scss']
})
export class ChiTietBookingComponent implements OnInit {
@Input() booking:any;
@Input() thongTin:any;
  constructor(private cinemaService:CinemaService, private movieService:MovieService) { }
hinhRap:any;
listRap:any;
diaChiRap:any;
listHeThongRap:any;
listTenRap:any;
hinhPhim:string="";
tenPhim:string="";
getListRap(){
  for(let chiTietDat of this.booking.danhSachGhe){
    this.listRap= chiTietDat.maHeThongRap;
  }
}
getHinhRap(){
  this.cinemaService.getInfoCinemaAPI(this.listRap).subscribe((data)=>{
    this.hinhRap=data[0].logo;})
}
getPlaceRap(){
  this.cinemaService.getPlaceCinemaAPI(this.listRap).subscribe((data)=>{
    for(const tenHeThongRap of this.booking.danhSachGhe ){
     this.listHeThongRap=tenHeThongRap.tenHeThongRap;
    }
    data.map((value:any)=>{
     this.listTenRap=value.tenCumRap;
     if(this.listHeThongRap==this.listTenRap){
       this.diaChiRap=value.diaChi;
     }
    })
   })
}
getHinhPhim(){
  this.movieService.getListNameMovieAPI(this.thongTin.maNhom,this.booking.tenPhim).subscribe((data)=>{
    data.map((value:any)=>{
      this.hinhPhim=value.hinhAnh;

    })

  })
}

  ngOnInit(): void {
    this.getListRap();

    this.getHinhRap();
    this.getPlaceRap();
    this.getHinhPhim();
    this.tenPhim=this.booking.tenPhim;
    }


}
