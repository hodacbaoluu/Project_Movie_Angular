import { Component, Input, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
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
  @Input() ktraexit: any;
  @Output() countChanged = new EventEmitter();
  @Output() existVideo = new EventEmitter();
  phim2: any;
  maPhim: number = 0;
  sao: any = [];
  ktra: boolean = false;
  clip?: string;
  constructor(private router: Router, private movieService: MovieService, private sanitized: DomSanitizer) { }
  layMaPhim(maPhim: number) {
    this.maPhim = maPhim;
    this.router.navigate([`/movie-detail/${maPhim}`])

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
  phatVideo() {
    if (this.ktraexit != true) {


      this.ktra = true;
      this.existVideo.emit(this.ktra);
    }

    this.countChanged.emit(this.phim.trailer);
  }
  getTrailer() {
    // console.log(this.clip);

  }


  trailer(oldURL: string) {

    return this.sanitized.bypassSecurityTrustResourceUrl(oldURL);


  }

  ngOnInit(): void {

    this.getSao();



  }

}
