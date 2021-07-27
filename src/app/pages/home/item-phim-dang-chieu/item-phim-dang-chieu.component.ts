import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-phim-dang-chieu',
  templateUrl: './item-phim-dang-chieu.component.html',
  styleUrls: ['./item-phim-dang-chieu.component.scss']
})
export class ItemPhimDangChieuComponent implements OnInit {
  @Input() phim: any;
  maPhim: number = 0;
  constructor(private router: Router) { }
  layMaPhim(maPhim: number) {
    this.maPhim = maPhim;
    this.router.navigate([`/movie-detail/${maPhim}`]);

  }
  ngOnInit(): void {

  }

}
