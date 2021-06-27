import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/service/movie/movie.service';

@Component({
  selector: 'app-carousel-phim',
  templateUrl: './carousel-phim.component.html',
  styleUrls: ['./carousel-phim.component.scss']
})
export class CarouselPhimComponent implements OnInit {
danhSachPhim:any=[];
tenPhim:string="Phim";
maPhim:number=0;
tenCumRap:string="Rạp";
day:string="Ngày xem";
suatChieu:string="Suất chiếu";
maRap:string="";
handlePhim(tenPhim:string,maPhim:number){
  this.tenPhim=tenPhim;
  this.maPhim=maPhim;
  console.log(maPhim);
  this.tenCumRap="Rạp";
  this.day="Ngày xem"
  this.getInfoMovie();
}
handleRap(tenCumRap:string,maRap:string){
  this.tenCumRap=tenCumRap;
  this.maRap=maRap;
  console.log(maRap);

  this.getInfoMovie();
}
handleDay(day:string){
  this.day=day;
  this.getInfoMovie();
  console.log(day);

}
handleSuatChieu(suatChieu:string){
  this.suatChieu=suatChieu;
}
  constructor(private movieService:MovieService ) {}
  movieList:any=[];
  movieCarousel:any=[];
  movieCarouselActive:any=[];
  movieInfoList:any=[];
  maPhimActive:number=1374;
  listMaPhim:any[]=[1329,3394,4428,4332];
  list:any[]=[];
  getListMovie(){
    this.movieService.getListMovieApi().subscribe((data)=>{


      this.movieList=data;
    })
  }
  getCarouselMovie(){
    for (const maPhim of this.listMaPhim) {
      this.movieService.getCarouselMovieApi(maPhim).subscribe((data)=>{
        this.list.push(data);
      })
    }
    this.movieCarousel=this.list;
  }
  getCarouselMovieActive(){
    this.movieService.getCarouselMovieApi(this.maPhimActive).subscribe((data)=>{
      this.movieCarouselActive=data;
    })
  }
  getNameMovie(){
    this.movieService.getListMovieApi().subscribe((data)=>{
      this.danhSachPhim=data;
    })
  }
  getInfoMovie(){

      this.movieService.getCarouselMovieApi(this.maPhim).subscribe((data)=>{
        console.log(data);
        this.movieInfoList=data;

      })
  }
  ngOnInit(): void {
    this.getCarouselMovieActive();
    this.getCarouselMovie();
    // this.getInfoMovie();
    this.getListMovie();
    this.getNameMovie();


  }

}
