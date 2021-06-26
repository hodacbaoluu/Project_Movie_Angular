import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/service/movie/movie.service';

@Component({
  selector: 'app-carousel-phim',
  templateUrl: './carousel-phim.component.html',
  styleUrls: ['./carousel-phim.component.scss']
})
export class CarouselPhimComponent implements OnInit {
danhsachPhim:any[]=[
  {
    tenPhim:"Chị Mười Ba: 3 Ngày Sinh Tử (C18)",
    maPhim:""
  },
  {
    tenPhim:"Lừa Đểu Gặp Lừa Đảo - The Con-Heartist (C16)",
    maPhim:""
  },
  {
    tenPhim:"Thợ Săn Quái Vật - Monster Hunter (C13)",
    maPhim:""
  },
  {
    tenPhim:"Tay Xạ Thủ - The Marksman (C16)",
    maPhim:""
  },
  {
    tenPhim:"Cuộc Sống Nhiệm Màu - Soul - (P)",
    maPhim:""
  },
  {
    tenPhim:"Bạn Quỷ - Come Play (C16)",
    maPhim:""
  },
  {
    tenPhim:"Nam Sinh Số 11 - The Child Who Would Not Come (C18)",
    maPhim:""
  },
  {
    tenPhim:"Sám Hối (C18)",
    maPhim:""
  },
  {
    tenPhim:"'Em' Là Của Em (C16)",
    maPhim:""
  },
  {
    tenPhim:"Phòng Chat Quỷ Ám - Host (C18)",
    maPhim:""
  },
  {
    tenPhim:"Cậu Vàng (C16)",
    maPhim:""
  },
  {
    tenPhim:"Đường Cong Của Quỷ - The Cursed Lesson (C18)",
    maPhim:""
  },
  {
    tenPhim:"Thuyền Trưởng Răng Kiếm và Viên Kim Cương Ma Thuật - Captain Sabertooth and The Magic Diamond (P)",
    maPhim:""
  },
  {
    tenPhim:"Căn Phòng Ma Ám - Stigmatized Properties (C16)",
    maPhim:""
  },
  {
    tenPhim:"Nữ Thần Chiến Binh 1984 - Wonder Woman 1984 (C13)",
    maPhim:""
  },
  {
    tenPhim:"Doraemon: Nobita và Những Bạn Khủng Long Mới - Doraemon the Movi  e: Nobita's New Dinosaurs (P)",
    maPhim:""
  },
  {
    tenPhim:"Cuộc Giải Cứu Sinh Tử - Redemption Day (C18)",
    maPhim:""
  },
  {
    tenPhim:"Ghost Theater (C18)",
    maPhim:""
  },
  {
    tenPhim:"Come Kiss Me At 0:00 A.M. (P)",
    maPhim:""
  },
  {
    tenPhim:"And Your Bird Can Sing (C16)",
    maPhim:""
  },
  {
    tenPhim:"Amanogawa (P)",
    maPhim:""
  },
  {
    tenPhim:"Shoplifters (C18)",
    maPhim:""
  },
  {
    tenPhim:"Đại Dịch Cúm - The Flu (P)",
    maPhim:""
  },
  {
    tenPhim:"Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận - Demon Slayer The Movie: Mugen Train (P)",
    maPhim:""
  },
  {
    tenPhim:"Nghề Siêu Khó - Extreme Job (C18)",
    maPhim:""
  },
]
tenPhim:string="Phim";
handlePhim(tenPhim:string){
  this.tenPhim=tenPhim;
}
  constructor(private movieService:MovieService ) {}
  movieList:any=[];
  movieCarousel:any=[];
  movieCarouselActive:any=[];
  maPhimActive:number=1374;
  listMaPhim:any[]=[1329,3394,4428,4332];
  list:any[]=[];
  getListMovie(){
    this.movieService.getListMovieApi().subscribe((data)=>{
      console.log(data);

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


  ngOnInit(): void {
    this.getCarouselMovieActive();
    this.getCarouselMovie();
    this.getListMovie();

  }

}
