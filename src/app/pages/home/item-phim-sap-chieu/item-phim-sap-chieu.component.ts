import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-phim-sap-chieu',
  templateUrl: './item-phim-sap-chieu.component.html',
  styleUrls: ['./item-phim-sap-chieu.component.scss']
})
export class ItemPhimSapChieuComponent implements OnInit {
@Input()phim:any;
  constructor() { }

  ngOnInit(): void {
  }

}
