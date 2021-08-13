import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../core/service/movie/movie.service';

@Component({
  selector: 'app-item-phim-dang-chieu',
  templateUrl: './item-phim-dang-chieu.component.html',
  styleUrls: ['./item-phim-dang-chieu.component.scss']
})
export class ItemPhimDangChieuComponent implements OnInit {
  @Input() phim: any;
  @Output() eventURL = new EventEmitter<any>()
  phim2: any;
  maPhim: number = 0;
  sao: any = [];
  ktra: boolean = false;
  constructor(private router: Router, private movieService: MovieService, private sanitized: DomSanitizer) { }
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
  // phatVideo(maPhim: number) {
  //   this.ktra = true;
  //   this.maPhim = maPhim;
  //   console.log(maPhim);

  //   console.log(this.ktra);

  // }
  dungVideo() {
    this.ktra = false;
    console.log(this.ktra);

  }
  phatVideo() {
    // this.movieService.getCarouselMovieApi(maPhim).subscribe((data) => {
    //   this.phim2 = data;
    //   console.log(this.phim2.trailer);



    // })
    this.eventURL.emit(this.phim)
    this.ktra = true;
    console.log(this.ktra);

  }

  trailer(oldURL: string): SafeResourceUrl {
    if (oldURL) {
      oldURL = oldURL.replace("watch?v=", "embed/");
    }
    return this.sanitized.bypassSecurityTrustResourceUrl(oldURL);
  }

  ngOnInit(): void {

    this.getSao();



  }

}
