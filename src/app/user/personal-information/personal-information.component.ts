import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/core/service/auth/auth.service';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  formCapNhat?:FormGroup;

  ktra:boolean=true;//mở tắt nhìn thấy mật khẩu
see(){
  if(this.ktra){
    this.ktra=false;
  } else this.ktra=true;

}
user:any={
  taiKhoan:this.authService.getCurrentUser().taiKhoan, };
userInfo:any={};

capNhat(thamSo:any){
  let taiKhoan=thamSo.getAttribute('data-taiKhoan');
  let matKhau=thamSo.getAttribute('data-matKhau');
  let hoTen=thamSo.getAttribute('data-hoTen');
  let email=thamSo.getAttribute('data-email');
  let soDT=thamSo.getAttribute('data-soDT');
  console.log(taiKhoan);

  this.formCapNhat?.setValue({
    hoTen:hoTen,
    email:email,
    soDT:soDT,
    taiKhoan:taiKhoan,
    matKhau:matKhau,
    maNhom:"GP01",
    maLoaiNguoiDung:"QuanTri"

  })

}
handleCapNhat(){
  console.log(this.formCapNhat?.value);
  this.authService.updateInfoAPI( this.formCapNhat?.value,this.token).subscribe((data)=>{
    alert('Cập nhật thành công 🤩');
  })

}
currenUser:any=null;
token:any;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authService.inforAPI(this.user).subscribe((data)=>this.userInfo=data);
    this.authService.currentUser.subscribe((data)=>{
      this.currenUser=data;
      this.token=this.currenUser.accessToken;
    })
    console.log(this.token);

    // this.user=this.authService.getCurrentUser();
    // console.log(this.user);
    this.formCapNhat= new FormGroup({
      taiKhoan: new FormControl(null),
      matKhau: new FormControl(null),
      email: new FormControl(null),
      soDT: new FormControl(null),
      hoTen: new FormControl(null),
      maNhom:new FormControl(null),
      maLoaiNguoiDung:new FormControl(null)
    })
  }





  }

