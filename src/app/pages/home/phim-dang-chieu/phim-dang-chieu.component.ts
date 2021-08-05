import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/service/movie/movie.service';

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit {

  constructor(private phimDangChieuService: MovieService) { }
  danhSachPhimDangChieu: any = [];
  maNhom: number = 6;
  getNameMovie() {
    this.phimDangChieuService.getListMovieApi(this.maNhom).subscribe((data) => {
      this.danhSachPhimDangChieu = data;
    })
  }
  ngOnInit(): void {
    this.getNameMovie();
  }

}
