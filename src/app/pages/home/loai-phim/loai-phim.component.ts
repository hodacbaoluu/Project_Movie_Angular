import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loai-phim',
  templateUrl: './loai-phim.component.html',
  styleUrls: ['./loai-phim.component.scss']
})
export class LoaiPhimComponent implements OnInit {

  phimDangChieu:boolean=true;
  handlePhimDangChieu(){
    this.phimDangChieu=true;
  }
  handlePhimSapChieu(){
    this.phimDangChieu=false;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
