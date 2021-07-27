import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-rap',
  templateUrl: './chi-tiet-rap.component.html',
  styleUrls: ['./chi-tiet-rap.component.scss']
})
export class ChiTietRapComponent implements OnInit {

  constructor() { }
  kTra: boolean = true;
  handleLichChieu() {
    this.kTra = true;
  }

  ngOnInit(): void {
  }

}
