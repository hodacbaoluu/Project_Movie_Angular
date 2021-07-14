import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/core/service/auth/auth.service';
// import { AuthService } from '../../core/service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // danhSachTP:any[]=[{
  //   tenTinh:"Hà Nội",
  //   maTinh:"#hanoi"
  // },{
  //   tenTinh:"Quảng Nam",
  //   maTinh:"#quangnam"
  // },{
  //   tenTinh:"Hồ Chí Minh",
  //   maTinh:"#hochiminh"
  // },{
  //   tenTinh:"Nha Trang",
  //   maTinh:"#nhatrang"
  // },{
  //   tenTinh:"Vũng Tàu",
  //   maTinh:"#vungtau"
  // },{
  //   tenTinh:"Bình Định",
  //   maTinh:"#binhdinh"
  // },{
  //   tenTinh:"Quảng Trị",
  //   maTinh:"#quangtri"
  // },{
  //   tenTinh:"Quảng Bình",
  //   maTinh:"#quangbinh"
  // },{
  //   tenTinh:"Huế",
  //   maTinh:"#hue"
  // },{
  //   tenTinh:"Hà Tĩnh",
  //   maTinh:"#hatinh"
  // },{
  //   tenTinh:"Lâm Đồng",
  //   maTinh:"#lamdong"
  // },{
  //   tenTinh:"Bình Dương",
  //   maTinh:"#binhduong"
  // },]
  // tenTinh:string="Hà Nội";
  // maTinh:string="#hanoi"
  // handleTinh(tenTinh:string,maTinh:string){
  //   this.tenTinh=tenTinh;
  //   this.maTinh=maTinh;

  // }

  handleLogout(){
    console.log(this.currentUser);
    localStorage.removeItem('userLogin');

  }
  constructor(private authService: AuthService) { }
currentUser:any=null;
  //tương đướng với componentDidMount
  ngOnInit(): void {
    //cách 1: chỉ gọi đúng 1 lần duy nhất nếu currentUser trên service thay đổi (không thể cập nhật)
    // this.authService.getCurrentUser();
    //cách 2: khi data trên service thay đổi sẽ chạy lại callback và nhận được data mới
    this.authService.currentUser.subscribe((data)=>{
      this.currentUser=data;
      console.log(this.currentUser);
    })
  }

}
