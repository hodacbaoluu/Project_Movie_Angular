import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  danhSachTP:any[]=[{
    tenTinh:"Hà Nội",
    maTinh:"#hanoi"
  },{
    tenTinh:"Quảng Nam",
    maTinh:"#quangnam"
  },{
    tenTinh:"Hồ Chí Minh",
    maTinh:"#hochiminh"
  },{
    tenTinh:"Nha Trang",
    maTinh:"#nhatrang"
  },{
    tenTinh:"Vũng Tàu",
    maTinh:"#vungtau"
  },{
    tenTinh:"Bình Định",
    maTinh:"#binhdinh"
  },{
    tenTinh:"Quảng Trị",
    maTinh:"#quangtri"
  },{
    tenTinh:"Quảng Bình",
    maTinh:"#quangbinh"
  },{
    tenTinh:"Huế",
    maTinh:"#hue"
  },{
    tenTinh:"Hà Tĩnh",
    maTinh:"#hatinh"
  },{
    tenTinh:"Lâm Đồng",
    maTinh:"#lamdong"
  },{
    tenTinh:"Bình Dương",
    maTinh:"#binhduong"
  },]
  tenTinh:string="Hà Nội";
  maTinh:string="#hanoi"
  handleTinh(tenTinh:string,maTinh:string){
    this.tenTinh=tenTinh;
    this.maTinh=maTinh;

  }
  constructor() { }

  ngOnInit(): void {
  }

}
