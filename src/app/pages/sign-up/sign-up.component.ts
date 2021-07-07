import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../core/service/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  // @ViewChild("formDangKy") formDK?:NgForm;
  // nguoiDangKy:any=[];
  // constructor() { }
  // DangKy(value:any){
  //   this.nguoiDangKy.push(value);
  //   this.formDK?.reset();


  // }
  formDangKy?:FormGroup;

  get taiKhoan(){//cách viết rút gọn bên html
    return this.formDangKy?.get('taiKhoan');
  }

  handleSignUp(){
    console.log(this.formDangKy?.value);
    this.authService.signUpApi(this.formDangKy?.value).subscribe((data)=>{
      console.log(data);

    })

  }
  constructor(private authService:AuthService){}
  ngOnInit(): void {
    this.formDangKy= new FormGroup({
      taiKhoan: new FormControl(null, Validators.required),
      matKhau: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      soDt: new FormControl(null, Validators.required),
      maNhom:new FormControl(null, Validators.required),
      maLoaiNguoiDung: new FormControl(null),
      hoTen: new FormControl(null, Validators.required)
    })
  }

}
