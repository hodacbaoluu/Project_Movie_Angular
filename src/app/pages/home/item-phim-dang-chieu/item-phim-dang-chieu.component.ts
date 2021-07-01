import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-phim-dang-chieu',
  templateUrl: './item-phim-dang-chieu.component.html',
  styleUrls: ['./item-phim-dang-chieu.component.scss']
})
export class ItemPhimDangChieuComponent implements OnInit {
@Input() phim:any;
  constructor() { }

  ngOnInit(): void {
  }

}
