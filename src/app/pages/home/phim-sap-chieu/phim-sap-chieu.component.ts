import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/service/movie/movie.service';

@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.scss']
})
export class PhimSapChieuComponent implements OnInit {

  constructor(private phimSapChieuService:MovieService) { }
danhSachPhimSapChieu:any=[];
danhSachLichChieu:any=[];
maNhom:number=5;

  getNameMovie(){
    this.phimSapChieuService.getListMovieApi(this.maNhom).subscribe((data)=>{
      this.danhSachPhimSapChieu=data;

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
  }


}
