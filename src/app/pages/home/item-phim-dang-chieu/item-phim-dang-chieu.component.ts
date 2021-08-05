import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../core/service/movie/movie.service';

@Component({
  selector: 'app-item-phim-dang-chieu',
  templateUrl: './item-phim-dang-chieu.component.html',
  styleUrls: ['./item-phim-dang-chieu.component.scss']
})
export class ItemPhimDangChieuComponent implements OnInit {
  @Input() phim: any;
  maPhim: number = 0;
  sao: any = [];

  constructor(private router: Router, private movieService: MovieService) { }
  layMaPhim(maPhim: number) {
    this.maPhim = maPhim;
    this.router.navigate([`/movie-detail/${maPhim}`]);

  }
  getSao() {
    let s = 0;
    for (let i = 1; i <= this.phim.danhGia / 2; i++) {
      this.sao.push({ sao: 2 }, { link: "../../../../assets/img/star1.png" });
      s = s + 2;
    }
    if ((this.phim.danhGia - s) != 0) {
      this.sao.push({ sao: this.phim.danhGia - s }, { link: "../../../../assets/img/star1.2.png" });
    }

  }

  ngOnInit(): void {

    this.getSao();



  }

}
